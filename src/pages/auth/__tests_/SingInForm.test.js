import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignInForm from "../SignInForm";


test('renders sign in form', () => {
  render(
    <Router>
        <SignInForm />
    </Router>
  )

  const usernameInput = screen.getByRole('textbox', {name: 'Username'});
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', {name: 'Sign In'});
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('renders username and password input fields', () => {
  render(
    <Router>
        <SignInForm />
    </Router>
  )

  const usernameInput = screen.getByRole('textbox', {name: 'Username'});
  const passwordInput = screen.getByLabelText('Password');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('renders submit button', () => {
  render(
    <Router>
        <SignInForm />
    </Router>
  )

  const submitButton = screen.getByRole('button', {name: 'Sign In'});
  expect(submitButton).toBeInTheDocument();
});