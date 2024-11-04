import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { blue, green, pink, yellow } from "@mui/material/colors";

const style = {
  avatar: (note) => {
    if (note.category == "work") return { bgcolor: yellow[700] };
    if (note.category == "money") return { bgcolor: green[500] };
    if (note.category == "todos") return { bgcolor: pink[500] };
    return { bgcolor: blue[500] };
  },
};

const Note = ({ note, handleDelete }) => {
  return (
    <Box>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={style.avatar(note)}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Note;
