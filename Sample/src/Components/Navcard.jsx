import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "./Navbar";
import Cardarrange from "./Cardarrange";
import Topcard from "./Topcard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1), // Remove this line if you want no padding
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FullWidthItem = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: 0,
  margin: 0,
}));

export default function Navcard() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0} >
        <Box gridColumn="span 12">
          <FullWidthItem>
            <Navbar />
          </FullWidthItem>
        </Box>
        <Box gridColumn="span 12">
            <Box sx = {{display : "flex" , justifyContent : "space-around", padding : 2}}>
            <Item><Topcard></Topcard></Item>
            <Item><Topcard></Topcard></Item>
            <Item><Topcard></Topcard></Item>
            <Item><Topcard></Topcard></Item>
            </Box>
        </Box>
        <Box gridColumn="span 12">
          <Item>
            <Cardarrange />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
