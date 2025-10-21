import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList component", () => {
  test("initial render shows demo todos", () => {
    render(<TodoList />);
    // Check for known demo texts
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
    expect(screen.getByText(/Ship app/i)).toBeInTheDocument();
  });

  test("can add a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByLabelText("new-todo-input");
    const addButton = screen.getByLabelText("add-todo-button");

    await userEvent.type(input, "New Todo Item");
    await userEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("can toggle todo completion by clicking the todo text", async () => {
    render(<TodoList />);
    // Find the demo todo "Learn React" — identify its element via getByText
    const learnReact = screen.getByText(/Learn React/i);
    // initial style: not line-through
    expect(learnReact).not.toHaveStyle("text-decoration: line-through");

    await userEvent.click(learnReact);
    expect(learnReact).toHaveStyle("text-decoration: line-through");

    // toggle back
    await userEvent.click(learnReact);
    expect(learnReact).not.toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", async () => {
    render(<TodoList />);
    // Find a todo and its delete button. We'll find "Ship app".
    const shipApp = screen.getByText(/Ship app/i);
    expect(shipApp).toBeInTheDocument();

    // Find the delete button next to it: select by aria-label that includes its id
    // We need to find its parent li and then the button. Simpler approach: find all delete buttons and click the one near the item:
    const deleteButtons = screen.getAllByRole("button", { name: /delete-/i });
    // We'll find the button whose previousSibling text contains "Ship app"
    // Safer: query the parent li then button:
    const shipAppLi = shipApp.closest("li");
    const deleteBtn = shipAppLi.querySelector("button");
    await userEvent.click(deleteBtn);

    expect(screen.queryByText(/Ship app/i)).not.toBeInTheDocument();
  });
});
