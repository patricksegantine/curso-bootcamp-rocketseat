import app from './app';

const port = 3333;

app.listen(3333, () => {
  console.log(`Servidor iniciado em http://localhost:${port}/`);
});
