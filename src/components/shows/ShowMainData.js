import React from "react";
import NOT_FOUND from "../../img/not-found.png";

export default function ShowMainData({ name, rating, summary, tags, image }) {
    return (
        <div className="show-main-data--wrapper">
            <img src={image ? image.original : NOT_FOUND} alt="show-cover" />
            <div className="show-main-data--text">
                <div className="show-main-data--head">
                    <h1>{name}</h1>
                    <div>
                        {/* <div className={isStarred ? "star-active" : "star"} /> */}
                        <div className="star-active" />

                        <span>{rating.average || "N/A"}</span>
                    </div>
                </div>
                {/* Equal to innerHtml. React becomes aware of the HTML tags and renders them properly */}
                <div
                    className="show-main-data--summary"
                    dangerouslySetInnerHTML={{ __html: summary }}
                />

                <div>
                    Tags:{" "}
                    <div className="show-main-data--tag-list">
                        {tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
