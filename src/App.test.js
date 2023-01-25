import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("Test Input Task Details and Display Task", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Add Task/i);
  const inputEl = screen.getByPlaceholderText(/Title/i);
  const inputEl2 = screen.getByPlaceholderText(/Assignee/i);
  userEvent.type(inputEl, "Test Task");
  userEvent.type(inputEl2, "Test Assignee");
  userEvent.click(buttonEl);
  const elementslist = screen.getByText(/Test Task/i);
  expect(elementslist).toBeInTheDocument(); //Task should be displayed
});

test("Test TodoCounter", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Add Task/i);
  userEvent.click(buttonEl);
  userEvent.click(buttonEl);
  userEvent.click(buttonEl);
  userEvent.click(buttonEl);
  const TodoCount = screen.getByText(/4/i);
  expect(TodoCount).toBeInTheDocument(); //Todo Counter should be 4
});
test("Test Done Update and Counter", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Add Task/i);
  userEvent.click(buttonEl);
  const DoneButton = screen.getByText(/Done ✔️/i);
  userEvent.click(DoneButton);
  const DoneCount = screen.getByText(/1/i);
  expect(DoneCount).toBeInTheDocument(); //Done Counter should be 1
});
test("Test Delete Task", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Add Task/i);
  userEvent.click(buttonEl); //Add Task 1
  const DeleteButton = screen.getByText(/Delete 🗑️/i);
  userEvent.click(DeleteButton); //Delete Task 1
  userEvent.click(buttonEl); //Add Task 2 (Task 1 is deleted)
  const TodoCount = screen.getByText(/1/i);
  expect(TodoCount).toBeInTheDocument(); //Todo Counter should be 1
});

test("Test Search Filter", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Add Task/i);
  const inputEl = screen.getByPlaceholderText(/Title/i);
  const inputEl2 = screen.getByPlaceholderText(/Assignee/i);
  userEvent.type(inputEl, "Test Task");
  userEvent.type(inputEl2, "Test Assignee");
  userEvent.click(buttonEl);
  const inputEl3 = screen.getByPlaceholderText(/Search for a task/i);
  userEvent.type(inputEl3, "Test");
  const elementslist = screen.getByText(/Test Task/i);
  expect(elementslist).toBeInTheDocument(); //Only Task with "Test" in Title should be displayed
});

test("Test Filter by Status ", () => {
  render(<App />);
  const Addbutton = screen.getByText(/Add Task/i);
  const inputEl = screen.getByPlaceholderText(/Title/i);
  const inputEl2 = screen.getByPlaceholderText(/Assignee/i);
  userEvent.type(inputEl, "Test Task Done TASK");
  userEvent.type(inputEl2, "Test Assignee");
  userEvent.click(Addbutton); //Add Task 1
  const DoneButton = screen.getByText(/Done ✔️/i);
  userEvent.click(DoneButton); //Mark Task 1 as Done
  userEvent.type(inputEl, "Test Task TODO TASK");
  userEvent.type(inputEl2, "Test Assignee");
  userEvent.click(Addbutton); //Add Task 2
  const inputEl3 = screen.getByRole("option", { name: /All/i });
  userEvent.click(inputEl3);
  const inputEl4 = screen.getByRole("option", { name: /Done/i });
  userEvent.click(inputEl4);
  const elementslist = screen.getByText(/Test Task Done TASK/i); //Only Done Task should be displayed
  expect(elementslist).toBeInTheDocument();
});
