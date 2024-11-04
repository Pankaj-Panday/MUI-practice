import { useState, useEffect } from "react";

import Note from "../components/Note";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    });
    setNotes((prevNotes) => {
      const newNotes = prevNotes.filter((note) => note.id !== id);
      return newNotes;
    });
  };

  return (
    <Container>
      {/* <Grid container spacing={3}> */}
      <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={3}>
        {notes.map((note) => (
          // <Grid key={note.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Box key={note.id}>
            <Note note={note} handleDelete={handleDelete} />
          </Box>
          // </Grid>
        ))}
      </Masonry>
      {/* </Grid> */}
    </Container>
  );
};

export default Notes;
