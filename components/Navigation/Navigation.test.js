import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const playLink = screen.getByRole("link", { name: "Play" });
  const historyLink = screen.getByRole("link", { name: "History" });
expect(playLink).toBeInTheDocument();
expect(historyLink).toBeInTheDocument();
});


/* Switch to [`Navigation.test.js`](components/Navigation/Navigation.test.js) and check whether the navigation is rendered.

- In the test file, `next/router` is already mocked, so you don't need to care about the routing.
- The exact acceptance criteria is also already defined inside of the test case. You just have to implement the test code inside the return statement of the `test()` function.
- An HTML `<a>` tag has the accessible role "link". */
