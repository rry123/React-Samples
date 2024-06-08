import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SingleCard from "./SingleCard";
import axios from "axios";

const initialCards = [
  { id: 1, apiUrl: "http://localhost:3000/users" },
  { id: 2, apiUrl: "http://localhost:3001/todos" },
  { id: 3, apiUrl: "http://localhost:3002/cars" },
];

function ArrangeCards() {
  const [cards, setCards] = useState(initialCards);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [newApiUrl, setNewApiUrl] = useState("");

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      const newData = {};
      await Promise.all(
        cards.map(async (card) => {
          try {
            const response = await axios.get(card.apiUrl);
            newData[card.id] = response.data;
          } catch (error) {
            console.log(`Error fetching data for card ${card.id}: `, error.message);
          }
        })
      );
      setData(newData);
      setLoading(false);
    };
    fetchAllData();
  }, [cards]);

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
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="API URL"
          variant="outlined"
          value={newApiUrl}
          onChange={(e) => setNewApiUrl(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button variant="contained" onClick={handleAddCard}>
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
          <SingleCard key={card.id} data={data[card.id] || []} loading={loading} apiUrl = {card.apiUrl} />
        ))}
      </Box>
    </Box>
  );
}

export default ArrangeCards;
