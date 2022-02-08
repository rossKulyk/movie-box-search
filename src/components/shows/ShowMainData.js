import React from "react";
import NOT_FOUND from "../../img/not-found.png";
import {
    MainDataWrapper,
    MainDataHeadline,
    MainDataTagList
} from "./shows-styles/ShowMainData.styled";
import { Star } from "../styled";

export default function ShowMainData({ name, rating, summary, tags, image }) {
    return (
        <MainDataWrapper>
            <img src={image ? image.original : NOT_FOUND} alt="show-cover" />
            <div className="show-main--text">
                <MainDataHeadline>
                    <h1>{name}</h1>
                    <div>
                        <Star active />

                        <span>{rating.average || "N/A"}</span>
                    </div>
                </MainDataHeadline>
                {/* Equal to innerHtml. React becomes aware of the HTML tags and renders them properly */}
                <div
                    className="show-main--summary"
                    dangerouslySetInnerHTML={{ __html: summary }}
                />

                <div>
                    Tags:{" "}
                    <MainDataTagList>
                        {tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </MainDataTagList>
                </div>
            </div>
        </MainDataWrapper>
    );
}
