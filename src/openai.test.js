import "@testing-library/jest-dom";
import { getAssistantResponse } from "./openai";

test("returns friendly greeting", async () => {
  const resp = await getAssistantResponse([{ role: "user", content: "hello" }]);
  expect(resp).toMatch(/hello/i);
});
