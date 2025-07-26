import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatBubble from "./ChatBubble";

test("renders timestamp when provided", () => {
  const timestamp = new Date().toISOString();
  render(<ChatBubble message={{ role: "user", content: "hello", timestamp }} />);
  const timeEl = screen.getByTestId("timestamp");
  expect(timeEl).toBeInTheDocument();
});
