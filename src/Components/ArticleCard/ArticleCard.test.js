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

  test('that all alt texts exist', () => {
    const {articleCardContainer} = render(<ArticleCard
        multimedia={mockArticle.multimedia}
        title={mockArticle.title}
      />, {wrapper: MemoryRouter})

    const imageElements = screen.getByAltText('article')
    expect(imageElements).toBeInTheDocument()
})
test('that all titles exist', () => {
    const {articleCardContainer} = render(<ArticleCard
        multimedia={mockArticle.multimedia}
        title={mockArticle.title}
      />, {wrapper: MemoryRouter})
    const titleElement1 = screen.getByText(`Federal Reserve's Path Is Murkier After Bank Blowup`)
    expect(titleElement1).toBeInTheDocument()

})
test('that all multimedia exists', () => {
    const {articleCardContainer} = render(<ArticleCard
        multimedia={mockArticle.multimedia}
        title={mockArticle.title}
      />, {wrapper: MemoryRouter})

        const mediaElement1 = screen.getByTestId("https://static01.nyt.com/images/2023/03/13/multimedia/13dc-fed-pfjh/13dc-fed-pfjh-superJumbo.jpg")
        expect(mediaElement1).toBeInTheDocument()

})
});