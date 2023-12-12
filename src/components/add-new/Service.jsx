import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
  TextareaAutosize,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Service = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Hello", firstName, lastName);
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField 
              id="first-name"
              label="First Name"
              value={firstName}
              onChange={e=>setFirstName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField 
              id="last-name"
              label="Last Name"
              value={lastName}
              onChange={e=>setLastName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField 
              id="email"
              label="Email"
              value={email}
              onChange={e=>setLastName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField 
              id="username"
              label="Username"
              value={userName}
              onChange={e=>setLastName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="description"
              label="Description"
              multiline
              rows={5}
              value={description}
              onChange={e=>setLastName(e.target.value)}
            />
          </FormControl>
          <Button variant="contained" type="submit" sx={{mt:2}}>Submit</Button>
        </Grid>
      </Grid>
      </form>
    </Box>
  );
};

export default Service;
