import React from "react";
import {
  render,
  fireEvent,
  getAllByText,
  getAllByTestId,
} from "@testing-library/react";
import NavBar from "../../components/navBar";

const expectedLinks = [
  {
    text: "Join the waitlist",
    href: "/",
  },
  {
    text: "Product",
    href: "/",
  },
  { text: "Team", href: "/" },
];
describe("NavBar component", () => {
  it("renders the brand name, hamburger icon, and join the waitlist button", () => {
    const { getByTestId } = render(<NavBar />);
    const brandName = getByTestId("brand-name");
    const hamburgerIcon = getByTestId("hamburger-icon");
    const joinWaitlistButton = getByTestId("join-the-waitlist-button");

    expect(brandName).toBeDefined();
    expect(hamburgerIcon).toBeDefined();
    expect(joinWaitlistButton).toBeDefined();
  });

  it("should display the correct links", () => {
    const { getByTestId } = render(<NavBar />);

    const navbar = getByTestId("navbar");

    // loop over the expected links
    for (const { text, href } of expectedLinks) {
      // get the link element
      const links = getAllByText(navbar, text);

      // Check that the link is found
      if (text === "Join the waitlist") {
        expect(links.length).toBe(2);
      } else {
        expect(links.length).toBe(1);
      }
    }
  });

  it("displays the close icon when the hamburger icon is clicked", () => {
    const { getByTestId } = render(<NavBar />);
    const hamburgerIcon = getByTestId("hamburger-icon");

    fireEvent.click(hamburgerIcon);
    const closeIcon = getByTestId("close-icon");
    expect(closeIcon).toBeDefined();
  });

  it("displays the links when the hamburger icon is clicked", () => {
    const { getByTestId } = render(<NavBar />);
    const hamburgerIcon = getByTestId("hamburger-icon");

    fireEvent.click(hamburgerIcon);
    const links = getAllByTestId(navbar, "links");
    expect(links).toBeDefined();
  });
});
