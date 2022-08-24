import { render, screen, waitFor } from "@testing-library/react";
import history from 'util/history';
import { Router, useParams } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import Form from "../Form";
import { productResponse, server } from "./fixtures";
import { ToastContainer } from 'react-toastify';
import selectEvent from 'react-select-event'

beforeAll(() => { server.listen() })
afterEach(() => server.resetHandlers());
afterAll(() => { server.close() })


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))


describe('ProductForm create tests', () => {


  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({
      productId: 'create'
    })
  })

  test('Should show toast and redirect when submit form correctly', async () => {
    render(
      <Router history={history}>
        <Form />
        <ToastContainer />
      </Router>

    );

    const nameInput = screen.getByTestId('name');
    const priceInput = screen.getByTestId('price');
    const imgUrlInput = screen.getByTestId('imgUrl');
    const descriptionInput = screen.getByTestId('description');
    const categoriesInput = screen.getByLabelText('Categorias');
    const submitButton = screen.getByRole('button', { name: /salvar/i });

    userEvent.type(nameInput, 'Computador');
    userEvent.type(priceInput, '5000.12')
    userEvent.type(imgUrlInput, 'www.google.com.br')
    userEvent.type(descriptionInput, 'Computador muito bom');
    await selectEvent.select(categoriesInput, ['Eletrônicos', 'Computadores']);

    userEvent.click(submitButton).then(() => {
      const toastElement = screen.getByText('Produto cadastrado com sucesso');
      expect(toastElement).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/admin/products')
    })
  })

  test('Should show 5 validation errors when only clicking submit', async () => {
    render(
      <Router history={history}>
        <Form />
      </Router>

    );

    const submitButton = screen.getByRole('button', { name: /salvar/i });

    userEvent.click(submitButton).then(() => {
      const messages = screen.getAllByText('Campo obrigatório')
      expect(messages).toHaveLength(5);
    })
  })

  test('Should clean validation errors when filling out the form', async () => {
    render(
      <Router history={history}>
        <Form />
      </Router>

    );

    const submitButton = screen.getByRole('button', { name: /salvar/i });

    userEvent.click(submitButton).then(() => {
      const messages = screen.getAllByText('Campo obrigatório')
      expect(messages).toHaveLength(5);
    })

    const nameInput = screen.getByTestId('name');
    const priceInput = screen.getByTestId('price');
    const imgUrlInput = screen.getByTestId('imgUrl');
    const descriptionInput = screen.getByTestId('description');
    const categoriesInput = screen.getByLabelText('Categorias');

    userEvent.type(nameInput, 'Computador');
    userEvent.type(priceInput, '5000.12')
    userEvent.type(imgUrlInput, 'www.google.com.br')
    userEvent.type(descriptionInput, 'Computador muito bom');
    await selectEvent.select(categoriesInput, ['Eletrônicos', 'Computadores']);

    userEvent.click(submitButton).then(() => {
      const messages = screen.queryAllByText('Campo obrigatório')
      expect(messages).toHaveLength(0);
    })
  })
})

describe('ProductForm update tests', () => {


  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({
      productId: '1'
    })
  })

  test('Should show toast and redirect when submit form correctly', async () => {
    render(
      <Router history={history}>
        <Form />
        <ToastContainer />
      </Router>

    );

    await waitFor(() => {
      const nameInput = screen.getByTestId('name');
      const priceInput = screen.getByTestId('price');
      const imgUrlInput = screen.getByTestId('imgUrl');
      const descriptionInput = screen.getByTestId('description');
      const formElement = screen.getByTestId('form');


      userEvent.type(nameInput, 'Computador');
      userEvent.type(priceInput, '5000.12')
      userEvent.type(imgUrlInput, 'www.google.com.br')
      userEvent.type(descriptionInput, 'Computador muito bom');

      expect(nameInput).toHaveValue(productResponse.name);
      expect(priceInput).toHaveValue(String(productResponse.price));
      expect(imgUrlInput).toHaveValue(productResponse.imgUrl);
      expect(descriptionInput).toHaveValue(productResponse.description);
      expect(formElement).toHaveFormValues({ categories: productResponse.categories.map((categorie) => String(categorie.id)) })
    })

    const submitButton = screen.getByRole('button', { name: /salvar/i });

    userEvent.click(submitButton).then(() => {
      const toastElement = screen.getByText('Produto cadastrado com sucesso');
      expect(toastElement).toBeInTheDocument();
    })
  })
})