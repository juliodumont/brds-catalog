import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "..";


describe("Pagination test", () => {
  test('', () => {
    const pageCount = 3;
    const range = 3;

    render(<Pagination pageCount={pageCount} range={range} />);
    screen.debug();

    const pages = ['1', '2', '3'];

    pages.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    })


    expect(screen.getByText(pages[0])).toHaveClass("pagination-link-active")
    expect(screen.queryByText('4')).not.toBeInTheDocument();
  });

  test.only('next arrow should call onChange', () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn().mockName('onChange');    
    render(<Pagination pageCount={pageCount} range={range} onChange={onChange} />);
    const arrowNext =  screen.getByTestId("arrow-next");
    userEvent.click(arrowNext).then(() => {
      expect(onChange).toHaveBeenCalledWith(1);
    });
   

  })

  test('previous arrow should call onChange', () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();

    render(<Pagination forcePage={1} pageCount={pageCount} range={range} onChange={onChange} />);
    //screen.debug();
    const arrowPrevious = screen.getByTestId("arrow-previous");
    userEvent.click(arrowPrevious);
    expect(onChange).toHaveBeenCalledWith(0);

  })

  test('pageLink should call onChange', () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn(() => {});

    render(<Pagination forcePage={1} pageCount={pageCount} range={range} onChange={onChange} />);
    //screen.debug();
    const page = screen.getByText('2');
    fireEvent.click(page);
    expect(onChange).toHaveBeenCalledWith(1);

  })

})

