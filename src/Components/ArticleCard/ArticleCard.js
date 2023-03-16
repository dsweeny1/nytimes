import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";
import emptyHeart from "../../Images/empty-heart.svg";
import filledHeart from "../../Images/filled-heart.svg";
import { useSaved, useSavedDispatch } from "../../Contexts/SavedContext";

export const ArticleCard = ({ multimedia, title }) => {
  const { savedArticles } = useSaved();
  const dispatch = useSavedDispatch();
  return (
    <div className="article-card">
      <Link
        to={`/${title}`}
        key={title}
        id={title}
        className="single-article-link"
      >
        <img
          className="article-image"
          src={multimedia}
          alt="article"
          aria-label={multimedia}
        />
        <h2 className="article-title">{title}</h2>
      </Link>
      {!savedArticles.includes(title) && (
        <button
          onClick={() =>
            dispatch({ type: "ADD_TO_SAVED", payload: { article: title } })
          }
        >
          <img src={emptyHeart} alt="save article" />
        </button>
      )}
      {savedArticles.includes(title) && (
        <button
          onClick={() =>
            dispatch({
              type: "DELETE_FROM_SAVED",
              payload: {
                article: article,
              },
            })
          }
        >
          <img src={filledHeart} alt="delete article" />
        </button>
      )}
    </div>
  );
};

export default ArticleCard;
