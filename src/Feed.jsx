
import Postagem from "./Postagem";
import Sugestoes from "./Sugestoes";
import AmigosGrid from './AmigosGrid';
import { Grid, Paper, Typography, TextField } from '@mui/material';

function Feed() {
  const amigos = [
    { nome: 'Gabriel', imagem: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', amigosEmComum: '3' },
    { nome: 'Miranda', imagem: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', amigosEmComum: '16' },
    { nome: 'Luciana', imagem: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', amigosEmComum: '12' },

  ];

  return (
    <Grid container spacing={2} sx={{ marginTop: 5, justifyContent: "space-around", }}>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <Postagem
            autor="Miranda"
            data="Publicado em 10 de Agosto de 2022"
            imagem="https://images.ecycle.com.br/wp-content/uploads/2021/05/03122127/pietro-de-grandi-T7K4aEPoGGk-unsplash-1024x683.jpg.webp"
            titulo="Minha viagem ao Caribe"
            texto="Acabei de chegar ao Caribe e estou muito animada para compartilhar muitas fotos e documentar bem minha viagem! Se atentem aos próximos posts."
            likes="5 curtidas"
            compartilhamentos="3 compartilhamentos"
            comentarios="1 comentário"
            comentarios1="Que linda foto! Boa viagem!"
            autorComentario="André"
            dataComentario="20 de Setembro de 2022"
          />
 
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3} style={{ paddingBottom: "10", }}>
        <Paper sx={{ p: 2 }}>
          <AmigosGrid amigos={amigos} />
          <Typography variant="h6"
            sx={{ marginTop: 10, }}>Sugestão de Amigos</Typography>
          <Sugestoes
            nome="Joana"
            imagem="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            amigosEmComum={'Gabriel e mais 2 '}
          />
          <Sugestoes
            nome="Pedro"
            imagem="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            amigosEmComum={'Luciana e mais 6'}
          />
          <Sugestoes
            nome="Amanda"
            imagem="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            amigosEmComum={'Gabriel, Luciana e mais 13'}
          />

        </Paper>
      </Grid>
    </Grid>
  );
}

export default Feed;
