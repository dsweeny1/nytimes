import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ArticleCard from "./ArticleCard";
import { MemoryRouter } from "react-router-dom";
import {
  SavedContext,
  SavedDispatchContext,
} from "../../Contexts/SavedContext";
import { mockArticle } from "../../mocks/articleMockData";
import { articles } from "../../mocks/articleMockData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: mockArticle.title }),
  useParams: () => ({ title: mockArticle.title }),
}));

describe("Article Card component", () => {
  let state, dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    state = { savedArticles: articles };
  });

  test("that dispatch is working", async () => {
    render(
      <SavedContext.Provider value={state}>
        <SavedDispatchContext.Provider value={dispatch}>
          <ArticleCard
            multimedia={mockArticle.multimedia}
            title={mockArticle.title}
          />
        </SavedDispatchContext.Provider>
      </SavedContext.Provider>,
      { wrapper: MemoryRouter }
    );
    const saveButton = screen.getByRole("button", { name: "save article" });
    fireEvent.click(saveButton);
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith({
        payload: {
          article: mockArticle.title,
        },
        type: "ADD_TO_SAVED",
      });
    });
  });
});