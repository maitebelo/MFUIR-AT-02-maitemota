import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IosShareIcon from '@mui/icons-material/IosShare';
import CommentIcon from '@mui/icons-material/Comment';

function Postagem(props) {
  return (
    <Card sx={{ marginBottom: 2, marginTop: 2 }}>
      <CardHeader
        titleTypographyProps={{ variant: "h4" }}
        title={`${props.titulo} por ${props.autor}`}
        subheader={props.data}
      />

      <CardMedia
        component="img"
        image={props.imagem}
        alt="imagem"
        sx={{ height: "50%", maxHeight: 600 }}
      />
      <CardContent>
        <Typography variant="body1" paragraph sx={{ color: "#333", fontSize: 16 }}>
          {props.texto}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <ThumbUpIcon style={{ color: "blue", marginRight: '10' }}></ThumbUpIcon><Typography variant="subtitle1" sx={{ marginRight: 2, paddingRight: 5, }}>
            {props.likes}
          </Typography>
          <IosShareIcon style={{ marginRight: '10' }}></IosShareIcon><Typography variant="subtitle1" sx={{ marginRight: 2, paddingRight: 5, }}>
            {props.compartilhamentos}
          </Typography>
          <CommentIcon style={{ marginRight: '10' }}></CommentIcon><Typography variant="subtitle1">{props.comentarios}</Typography>
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: 1, marginBottom: 1, }}>
        <Typography variant="subtitle2" sx={{ marginRight: 1, paddingRight: 3, }}>
          {props.autorComentario}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mr: 1, paddingRight: 5, }}>
          {props.dataComentario}
        </Typography>
        <Typography variant="body1">{props.comentarios1}</Typography>
      </Box>
      <TextField fullWidth
        id="outlined-multiline-static"
        label="Comentar"
        multiline
        rows={4}
      />

    </Card >
  );
}

export default Postagem;
