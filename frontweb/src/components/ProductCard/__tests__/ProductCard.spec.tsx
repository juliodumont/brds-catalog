import { render,screen } from "@testing-library/react";
import ProductCard from "..";

test.only('should render ProductPrice', () =>{ 
  const price = 20;
  render(<ProductCard product={{
    id: 0,
    name: "Smart TV",
    description: "",
    price: 20,
    imgUrl: "",
    date: "",
    categories: []
  }} />)
  screen.debug();
  expect(screen.getByText("Smart TV")).toBeInTheDocument();
  expect(screen.getByAltText("Smart TV")).toBeInTheDocument();
  expect(screen.getByText('R$')).toBeInTheDocument();
  expect(screen.getByText('20,00')).toBeInTheDocument();
});