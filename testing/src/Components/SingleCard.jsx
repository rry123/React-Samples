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
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const SingleCard = ({ id, apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newApiUrl, setNewApiUrl] = useState(apiUrl);
  const [editingUrl, setEditingUrl] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false); // State for the Info dialog
  const [columnsOpen, setColumnsOpen] = useState(false); // State for the Columns dialog
  const [selectedColumns, setSelectedColumns] = useState([]); // State for the selected columns

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

  const handleExpandClose = () => {
    setExpanded(false);
  };

  const handleInfoClick = () => {
    setInfoOpen(true);
  };

  const handleInfoClose = () => {
    setInfoOpen(false);
  };

  const handleColumnsClick = () => {
    setColumnsOpen(true);
  };

  const handleColumnsClose = () => {
    setColumnsOpen(false);
  };

  const handleColumnChange = (column) => {
    setSelectedColumns((prevSelectedColumns) => {
      if (prevSelectedColumns.includes(column)) {
        return prevSelectedColumns.filter((col) => col !== column);
      } else if (prevSelectedColumns.length < 3) {
        return [...prevSelectedColumns, column];
      } else {
        return prevSelectedColumns;
      }
    });
  };

  // Get number of data items and field names
  const numberOfItems = data.length;
  const fieldNames = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'column', minWidth: 275, maxHeight: 400 }}>
        <CardContent>
          {editingUrl ? (
            <TextField
              label="API URL"
              variant="outlined"
              value={newApiUrl}
              onChange={handleUrlChange}
              fullWidth
              sx={{
                '& .MuiInputBase-root': {
                  height: '30px', // Adjust this value to reduce the input height
                },
                '& .MuiInputLabel-root': {
                  top: '-1px', // Adjust this value to move the label closer to the input
                }
              }}
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
        <CardContent sx={{ flex: 1 }}>
          <SingleTable data={data} loading={loading} expanded={expanded} selectedColumns={selectedColumns}></SingleTable>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-start' }}>
          <Button size="small" onClick={handleExpandClick}>
            Expand
          </Button>
          <Button size="small" onClick={handleInfoClick}>
            Info
          </Button>
          <Button size="small" onClick={handleColumnsClick}>
            Columns
          </Button>
        </CardActions>
      </Card>
      <Dialog open={expanded} onClose={handleExpandClose} maxWidth="xl" fullWidth={true}>
        <DialogTitle>
          Table Data
          <IconButton aria-label="close" onClick={handleExpandClose} sx={{ position: "absolute", right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ height: '100%', padding: 0 }}>
          <Box sx={{ height: '100%', overflow: 'auto' }}>
            <SingleTable data={data} loading={loading} expanded={expanded} selectedColumns={selectedColumns}></SingleTable>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExpandClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={infoOpen} onClose={handleInfoClose} maxWidth="md" fullWidth={true}>
        <DialogTitle>
          API and Data Info
          <IconButton aria-label="close" onClick={handleInfoClose} sx={{ position: "absolute", right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6">API URL</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>{newApiUrl}</Typography>
          <Typography variant="h6">Number of Data Items</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>{numberOfItems}</Typography>
          <Typography variant="h6">Field Names</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>{fieldNames.join(", ")}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={columnsOpen} onClose={handleColumnsClose} maxWidth="sm" fullWidth={true}>
        <DialogTitle>
          Select Columns
          <IconButton aria-label="close" onClick={handleColumnsClose} sx={{ position: "absolute", right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {fieldNames.map((field) => (
            <FormControlLabel
              key={field}
              control={
                <Checkbox
                  checked={selectedColumns.includes(field)}
                  onChange={() => handleColumnChange(field)}
                  disabled={
                    selectedColumns.length >= 3 && !selectedColumns.includes(field)
                  }
                />
              }
              label={field}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleColumnsClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SingleCard
