import { render, screen, waitFor } from "@testing-library/react";
import history from 'util/history';
import { Router} from 'react-router-dom';

import Catalog from "..";

//Como dar mock no backend? MSW


test.only('Should render catalog with products', async () => {
  const text = 'Fazer login';
  render(
    <Router history={history}>
      <Catalog />
    </Router>
  );
  screen.debug();

  await waitFor(() => {
    expect(screen.getByText('Smart TV')).toBeInTheDocument();
  })
})