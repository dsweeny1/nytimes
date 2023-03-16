import React from "react";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";
import emptyHeart from "../../Images/empty-heart.svg";
import filledHeart from "../../Images/filled-heart.svg";
import { useSaved, useSavedDispatch } from "../../Contexts/SavedContext";
const dayjs = require("dayjs");

const SingleArticle = ({ articles }) => {
  const params = useParams();
  const { savedArticles } = useSaved();
  const { dispatch } = useSavedDispatch();
  const findArticle = articles.find((article) =>
    article.title.includes(params.id)
  );
  return (
    <div key={findArticle.title} id={findArticle.title}>
      <img src={findArticle.multimedia[0].url} height="400px" alt="article" />
      <h2 className="article-title">{findArticle.title}</h2>
      <h3 className="article-abstract">{findArticle.abstract}</h3>
      <h4 className="article-byline">{findArticle.byline}</h4>
      <h4 className="date-published">
        Published: {dayjs(findArticle.published_date).format("MMMM, D, YYYY")}
      </h4>
      <h4 className="article-section">Section: {findArticle.section}</h4>
      <a
        className="article-link"
        rel="noreferrer"
        href={findArticle.url}
        target={"_blank"}
      >
        Read more ...
      </a>
      {!savedArticles.includes(findArticle.title) && (
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_SAVED",
              payload: { article: findArticle.title },
            })
          }
        >
          <img src={emptyHeart} alt={"save article"} />
        </button>
      )}
      {savedArticles.includes(findArticle.title) && (
        <button
          onClick={() =>
            dispatch({
              type: "DELETE_FROM_SAVED",
              payload: { article: findArticle.title },
            })
          }
        >
          <img src={filledHeart} alt={"delete article"} />
        </button>
      )}
    </div>
  );
};

export default SingleArticle;
