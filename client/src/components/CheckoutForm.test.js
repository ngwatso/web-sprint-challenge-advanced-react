import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import CheckoutForm from "./CheckoutForm";

// TODO  Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<CheckoutForm />);

	const header = screen.getByText("Checkout Form");

	expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
	render(<CheckoutForm />);

	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const addressInput = screen.getByLabelText(/address/i);
	const cityInput = screen.getByLabelText(/city/i);
	const stateInput = screen.getByLabelText(/state/i);
	const zipCodeInput = screen.getByLabelText(/zip/i);
	const button = screen.getByText("Checkout");

	userEvent.type(firstNameInput, "Nick");
	userEvent.type(lastNameInput, "Watson");
	userEvent.type(addressInput, "1234 Waterview Dr");
	userEvent.type(cityInput, "Trenton");
	userEvent.type(stateInput, "Michigan");
	userEvent.type(zipCodeInput, "48183");

	expect(firstNameInput).toHaveValue("Nick");
	expect(lastNameInput).toHaveValue("Watson");
	expect(addressInput).toHaveValue("1234 Waterview Dr");
	expect(cityInput).toHaveValue("Trenton");
	expect(stateInput).toHaveValue("Michigan");
	expect(zipCodeInput).toHaveValue("48183");

	userEvent.click(button);

	const success = screen.getByTestId("successMessage");
	expect(success).toBeInTheDocument();
});
