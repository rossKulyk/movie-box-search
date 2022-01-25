import React from "react";
import { Link } from "react-router-dom";

// display data
export default function ShowCard({
    id,
    name,
    image,
    summary,
    onStarClick,
    isStarred
}) {
    // split string by empty space, slice/get 1st 10 element, join text array back to strings, replace all html tags with emtry strings
    const shortSummary = summary
        ? `${summary
              .split(" ")
              .slice(0, 10)
              .join(" ")
              .replace(/<.+?>/g, "")}...`
        : "No description";

    return (
        <div className="show-card--div">
            <div className="show-card--img-wrapper">
                <img src={image} alt="show" />
            </div>

            <h1>{name}</h1>

            <p>{shortSummary}</p>

            <div className="showcard-btns--div">
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button" onClick={onStarClick}>
                    <div className={isStarred ? "star-active" : "star"} />
                </button>
            </div>
        </div>
    );
}
