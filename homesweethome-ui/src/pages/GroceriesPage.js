import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Autocomplete,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const GroceriesPage = () => {
  const [groceries, setGroceries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const suggestions = ["Pommes", "Bananes", "Carottes", "Tomates", "Pain"];

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue) {
      setGroceries([...groceries, { name: inputValue, quantity: quantity }]);
      setInputValue("");
      setQuantity("");
    }
  };

  const deleteItem = (index) => {
    const updatedGroceries = groceries.filter((_, i) => i !== index);
    setGroceries(updatedGroceries);
  };

  const deleteAllItems = () => {
    setGroceries([]);
  };

  const updateQuantity = (index, value) => {
    const updatedGroceries = groceries.map((item, i) =>
      i === index ? { ...item, quantity: value } : item
    );
    setGroceries(updatedGroceries);
  };

  return (
    <div className="page-block">
      <Box className="groceries-page" sx={{ padding: 4, textAlign: "center" }}>
        <Box
          component="form"
          onSubmit={addItem}
          className="add-item-form"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Autocomplete
            freeSolo
            options={suggestions}
            value={inputValue}
            onChange={(e, newValue) => setInputValue(newValue || "")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nom de l'article"
                variant="outlined"
                required
                sx={{
                  backgroundColor: "#ffffff50",
                  borderRadius: "15px",
                  width: 300,
                  "& .MuiInputBase-input": {
                    color: "#a3a3bf",
                  },
                }}
              />
            )}
          />
          <TextField
            label="Quantité (facultatif)"
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            sx={{
              backgroundColor: "#ffffff50",
              borderRadius: "15px",
              width: 150,
              "& .MuiInputBase-input": {
                color: "#a3a3bf",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            sx={{ backgroundColor: "#ffcd58", color: "black" }}
          >
            Ajouter
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={deleteAllItems}
            sx={{ borderColor: "#ffcd58", color: "#ffcd58" }}
          >
            Supprimer Tout
          </Button>
        </Box>

        {/* Conteneur pour les tableaux */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "90%",
            margin: "20px auto",
          }}
        >
          {[0, 1].map((tableIndex) => (
            <TableContainer
              key={tableIndex}
              component={Paper}
              sx={{
                flex: 1,
                maxHeight: "55vh",
                margin: "0 10px",
                overflowY: "auto",
                backgroundColor: "#2b2b3d",
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.6)",
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#ffcd58",
                        fontWeight: "bold",
                        backgroundColor: "#2b2b3d50",
                      }}
                    >
                      Nom
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#ffcd58",
                        fontWeight: "bold",
                        backgroundColor: "#2b2b3d50",
                      }}
                    >
                      Quantité
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#ffcd58",
                        fontWeight: "bold",
                        backgroundColor: "#2b2b3d50",
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groceries
                    .slice(tableIndex * 6, (tableIndex + 1) * 6)
                    .map((item, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ color: "#ffcd58" }}>
                          {item.name}
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="text"
                            value={item.quantity || ""}
                            onChange={(e) =>
                              updateQuantity(index, e.target.value)
                            }
                            variant="outlined"
                            size="small"
                            sx={{
                              width: "100px",
                              backgroundColor: "#ffffff40",
                              borderRadius: "15px",
                              "& .MuiInputBase-input": {
                                color: "#a3a3bf",
                              },
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => deleteItem(index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default GroceriesPage;
