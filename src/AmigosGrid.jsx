import { Avatar, Grid, Typography } from '@mui/material'; 

function AmigosGrid(props) {
  return (
    <Grid container direction="column" style={{ marginTop: "16px", width: "100%",   }}>
      <Grid item>
        <Typography variant="h6">Amigos</Typography>
      </Grid>
      {props.amigos.map((amigo, index) => (
        <Grid item key={index} style={{ display: "flex", alignItems: "center", marginBottom: "8px",  }}>
          <Avatar src={amigo.imagem} alt={amigo.nome} />
          <div style={{ marginLeft: "8px" }}>
            <Typography variant="subtitle1">{amigo.nome}</Typography>
            <Typography variant="caption" color="textSecondary">
              {amigo.amigosEmComum} amigos em comum
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default AmigosGrid;