import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react";


describe('App', () => {
    test('should add a new todo item when addItemHandler is called', () => {
        render(<App />);

        const inputElement = screen.getByPlaceholderText('Enter new todo');
        const addButton = screen.getByText('Submit');

        fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
        fireEvent.click(addButton);

        const todoItem = screen.getByText('Test Todo');
        expect(todoItem).toBeInTheDocument();
    });
});