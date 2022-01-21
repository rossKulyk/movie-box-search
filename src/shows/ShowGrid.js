// business logic and map elements
import React from "react";
import ShowCard from "./ShowCard";
import notFound from "../img/not-found.png";

export default function ShowGrid({ data }) {
    console.log("ShowGrid data > ", data);
    return (
        <div>
            {data.map(({ show }) => {
                return (
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : notFound}
                        summary={show.summary}
                    />
                );
            })}
        </div>
    );
}
