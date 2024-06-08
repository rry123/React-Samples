import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import SingleTable from "./SingleTable";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SingleCard = ({ id, apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newApiUrl, setNewApiUrl] = useState(apiUrl);
  const [editingUrl, setEditingUrl] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(newApiUrl);
        setData(response.data);
      } catch (error) {
        console.log(`Error fetching data for card ${id}: `, error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [newApiUrl, id]);

  const handleUrlChange = (e) => {
    setNewApiUrl(e.target.value);
  };

  const handleEditUrlClick = () => {
    setEditingUrl(true);
  };

  const handleUrlSave = () => {
    setEditingUrl(false);
  };

  const handleExpandClick = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Card sx={{ minWidth: 275, maxHeight: 400 , overflowY: 'auto' }}>
        <CardContent sx={{ paddingBottom: 1 }}>
          {editingUrl ? (
            <TextField
              label="API URL"
              variant="outlined"
              value={newApiUrl}
              onChange={handleUrlChange}
              fullWidth
            />
          ) : (
            <>
              <Button size="small" onClick={handleEditUrlClick} sx={{ marginRight: 1 }}>
                URL
              </Button>
              <Typography variant="body1" sx={{ display: "inline" }}>
                {newApiUrl}
              </Typography>
            </>
          )}
        </CardContent>
        <CardContent>
          <SingleTable data={data} loading={loading} expanded={expanded}></SingleTable>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleExpandClick}>
            Expand
          </Button>
        </CardActions>
      </Card>
      <Dialog open={expanded} onClose={handleClose} maxWidth="xl" fullWidth={true} maxHeight="lg">
        <DialogTitle>
          Table Data
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box>
            <SingleTable data={data} loading={loading} expanded={true}></SingleTable>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SingleCard;
