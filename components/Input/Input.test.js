import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input placeholder="e.g Dodelido" name="nameOfGame" labelText="Name of game" />);
    const inputName = screen.getByLabelText("Name of game");
    
    expect(inputName).toHaveAttribute("name", "NameOfGame");
    expect(inputName).toHaveAttribute("placeholder", "e.g. Dodelido");

});

test("calls callback on every user input", async () => {
    const user = userEvent.setup();
    const userInput = jest.fn();
    render(<Input labelText="Name" name="name" onChange={userInput} />);

    const nameInput = screen.getByLabelText("Name");
    await user.type(nameInput, "Hello");

    expect(userInput).toHaveBeenCalledTimes(5);
});




/* You can now go a step further and not only check for a component being rendered, but also for its callback function being called.

Switch to [`Input.test.js`](components/Input/Input.test.js) and write the tests for all given acceptance criteria.

- To check for attributes like `placeholder` or `name`, you can use the matcher `toHaveAttribute(attributeName, value)`.
- The `Input` component receives an `onChange` callback; in order to test it, remember that you have to mock if first.
- You can check how often a function has been called with `toHaveBeenCalledTimes(numberOfExpectedCalls)`. */