/* eslint-disable no-unused-vars */
// business logic and map elements
import React from "react";
import FadeIn from "react-fade-in";

import ShowCard from "./ShowCard";
import notFound from "../../img/not-found.png";
import { useShows } from "../../misc/customHooks";

export default function ShowGrid({ data }) {
    const [starShows, dispatchStar] = useShows();
    // console.log("ShowGrid data > ", data);
    return (
        <FadeIn delay="100" className="show-grid--flex">
            {data.map(({ show }) => {
                const isStarred = starShows.includes(show.id);

                function onStarClick() {
                    if (isStarred) {
                        dispatchStar({ type: "REMOVE", showId: show.id });
                    } else {
                        dispatchStar({ type: "ADD", showId: show.id });
                    }
                }
                return (
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : notFound}
                        summary={show.summary}
                        // eslint-disable-next-line react/jsx-no-bind
                        onStarClick={onStarClick}
                        isStarred={isStarred}
                    />
                );
            })}
        </FadeIn>
    );
}
