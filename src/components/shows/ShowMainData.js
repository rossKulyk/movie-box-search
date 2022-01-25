import React from "react";
import NOT_FOUND from "../../img/not-found.png";

export default function ShowMainData({ name, rating, summary, tags, image }) {
    return (
        <div>
            <img src={image ? image.original : NOT_FOUND} alt="show-cover" />
            <div>
                <div>
                    <h1>{name}</h1>
                    <div>
                        <div className="star" />
                        <span>{rating.average || "N/A"}</span>
                    </div>
                </div>
                {/* Equal to innerHtml. React becomes aware of the HTML tags and renders them properly */}
                <div dangerouslySetInnerHTML={{ __html: summary }} />

                <div>
                    Tags:{" "}
                    <div>
                        {tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
