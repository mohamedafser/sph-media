import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import fetchMock from "fetch-mock";
import App from "./App";

// Mock the fetchData function
jest.mock("./App", () => ({
  ...jest.requireActual("./App"),
  fetchData: jest.fn(() =>
    Promise.resolve([
      {
        "town-name": "Bishan East",
        building: "5",
        "pre-sale": "6000",
      },
    ])
  ),
}));

test("should render table", async () => {
  //   fetchMock.get("http://localhost:5000/api", [
  //     {
  //       "town-name": "Bishan East",
  //       building: "5",
  //       "pre-sale": "6000",
  //     },
  //   ]);
  render(<App />);

  await screen.getByText("Bishan East");

  expect(screen.getByText("Bishan East")).toBeInTheDocument();
});
