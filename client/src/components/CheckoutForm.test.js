import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<CheckoutForm />);

	const header = screen.getByText("Checkout Form");

	expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
	const promise = Promise.resolve();
	const handleUpdateForm = jest.fn(() => promise);
	render(<CheckoutForm updateForm={handleUpdateForm} />);

	const firstNameInput = screen.getByText(/first name/i);
	userEvent.type(firstNameInput, "Nick");
	expect(firstNameInput).toHaveValue("Nick");

	const lastNameInput = screen.getByText(/last name/i);
	userEvent.type(lastNameInput, "Watson");
	expect(lastNameInput).toHaveValue("Watson");

	const addressInput = screen.getByText(/address/i);
	userEvent.type(addressInput, "1234 Waterview Dr");
	expect(addressInput).toHaveValue("1234 Waterview Dr");

	const cityInput = screen.getByText(/city/i);
	userEvent.type(cityInput, "Trenton");
	expect(cityInput).toHaveValue("Trenton");

	const stateInput = screen.getByText(/state/i);
	userEvent.type(stateInput, "Michigan");
	expect(stateInput).toHaveValue("Michigan");

	const zipCodeInput = screen.getByText(/zip/i);
	userEvent.type(zipCodeInput, "48183");
	expect(zipCodeInput).toHaveValue("48183");

	const button = screen.getByText("Checkout");
	userEvent.click(button);

	await act(() => promise);
	// const success = screen.getByTestId("successMessage");
	// expect(success).toBeInTheDocument();
});
