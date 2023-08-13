import React from 'react';
import { Avatar, Typography, Button, Grid } from "@mui/material";

function Sugestoes(props) {
  const amigoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    marginTop: '16px',
    width: "90%",
  }

  const informacaoAmigoStyle = {
    marginLeft: '16px'
  }
  const descricaoStyle ={
    marginBottom: '10px',
    display:'inline-block',
  }

  return ( 
    <div style={amigoStyle} >
      <Avatar src={props.imagem} alt={props.nome} />
      <div style={informacaoAmigoStyle}>
        <Typography variant="subtitle1">{props.nome}</Typography>
        <Typography variant="caption" color="textSecondary" style={descricaoStyle}>
          {props.amigosEmComum} amigos em comum
        </Typography>
        <Button variant="outlined" size="small" >Adicionar</Button>
      </div>
    </div>

  );
}

export default Sugestoes;
