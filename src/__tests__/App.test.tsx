import React from "react";
import {render, screen} from "@testing-library/react";
import {App} from "../App";


test("should render placeholder", () => {
	render(<App />);
	const placeholderText = screen.getByText(/loaded/i);
	expect(placeholderText).toBeInTheDocument();
});
