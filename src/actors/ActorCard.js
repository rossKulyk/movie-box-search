// display data
import React from "react";
// import { Link } from "react-router-dom";

export default function ActorCard({
    name,
    image,
    country,
    birthday,
    deathday,
    gender
}) {
    console.log(
        "ActorCard data > ",
        name,
        image,
        country,
        birthday,
        deathday,
        gender
    );

    return (
        <div>
            <div>
                <img src={image} alt="actor" />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p>{country ? `Comes from ${country.name}` : "No country known"}</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
        </div>
    );
}
