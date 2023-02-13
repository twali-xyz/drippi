import { render, fireEvent } from "@testing-library/react";
import LoginModal from "../../components/LoginModal";

describe("LoginModal", () => {
  it("should render the modal and inputs", () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginModal isOpen={true} onClose={() => {}} />
    );

    const emailInput = getByPlaceholderText("Email");
    expect(emailInput).toBeDefined();

    const passwordInput = getByPlaceholderText("Password");
    expect(passwordInput).toBeDefined();

    const submitButton = getByText("Submit");
    expect(submitButton).toBeDefined();
  });

  it("should update the email and password state on input change", async () => {
    const { getByPlaceholderText } = render(
      <LoginModal isOpen={true} onClose={() => {}} />
    );

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("testpassword");
  });
});
