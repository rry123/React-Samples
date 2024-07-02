import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SingleCard from "./SingleCard";
import axios from "axios";
import SingleCardAlpha from "./SingleCardAlpha";

const initialCards = [
  { id: 1, apiUrl: "http://localhost:3000/users" },
  { id: 2, apiUrl: "http://localhost:3001/todos" },
  { id: 3, apiUrl: "http://localhost:3002/cars" },
  { id: 4, apiUrl: "http://localhost:3006/api/pdf"}
];

function ArrangeCardsAlpha() {
  const [cards, setCards] = useState(initialCards);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [newApiUrl, setNewApiUrl] = useState("");

  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     setLoading(true);
  //     const newData = {};
  //     const delays = [1000, 2000, 3000]; // Delays for each API call in milliseconds

  //     await Promise.all(
  //       cards.map((card, index) => 
  //         new Promise((resolve) => 
  //           setTimeout(async () => {
  //             try {
  //               const response = await axios.get(card.apiUrl);
  //               newData[card.id] = response.data;
  //             } catch (error) {
  //               console.log(`Error fetching data for card ${card.id}: `, error.message);
  //             }
  //             resolve();
  //           }, delays[index] || 0)
  //         )
  //       )
  //     );
      
  //     setData(newData);
  //     setLoading(false);
  //   };
  //   fetchAllData();
  // }, [cards]);

  const handleAddCard = () => {
    if (newApiUrl.trim() === "") {
      return; // Don't add a card if the input is empty
    }

    const newId = cards.length + 1;
    setCards([...cards, { id: newId, apiUrl: newApiUrl }]);
    setNewApiUrl("");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2, alignItems: "center" }}>
        <TextField
          label="API URL"
          variant="outlined"
          value={newApiUrl}
          onChange={(e) => setNewApiUrl(e.target.value)}
          sx={{ 
            flex: 1, 
            height: "40px", 
            "& .MuiInputBase-root": { height: "100%" }, 
            "& .MuiInputLabel-root": { height: "15px", display: "flex", alignItems: "center" } 
          }}
        />
        <Button variant="contained" onClick={handleAddCard} sx={{ height: "40px" }}>
          Add Card
        </Button>
       
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        {cards.map((card) => (
          // <SingleCard key={card.id} data={data[card.id] || []} loading={loading} apiUrl={card.apiUrl} />
          <SingleCardAlpha key={card.id} id ={card.id} apiUrl={card.apiUrl} />
        ))}
      </Box>
    </Box>
  );
}

export default ArrangeCardsAlpha;
