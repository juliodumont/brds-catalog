import { render,screen } from "@testing-library/react";
import ProductPrice from "..";

test.only('should render ProductPrice', () =>{ 
  const price = 20;
  render(<ProductPrice price={price} />)
  screen.debug();
  expect(screen.getByText('R$')).toBeInTheDocument();
  expect(screen.getByText('20,00')).toBeInTheDocument();
});