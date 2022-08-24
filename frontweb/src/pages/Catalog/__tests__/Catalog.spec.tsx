import { render, screen, waitFor } from "@testing-library/react";
import history from 'util/history';
import { Router } from 'react-router-dom';
import { server } from "./fixtures";
import Catalog from "..";

//Como dar mock no backend? MSW
//Cria a resposta e o servidor
//Inicia a escuta

beforeAll(() => {server.listen()})
afterEach(() => server.resetHandlers());
afterAll(() => {server.close()})


test.only('Should render catalog with products', async () => {
  const text = 'Fazer login';
  render(
    <Router history={history}>
      <Catalog />
    </Router>
  );
  screen.debug();

  await waitFor(() => {
    expect(screen.getByText('Macbook Pro')).toBeInTheDocument();
  })
})