// business logic and map elements
import React from "react";
import ActorCard from "./ActorCard";
import notFound from "../img/not-found.png";

export default function ActorGrid({ data }) {
    console.log("ActorGrid data > ", data);
    return (
        <div>
            {data.map(({ person }) => {
                return (
                    <ActorCard
                        key={person.id}
                        name={person.name}
                        image={person.image ? person.image.medium : notFound}
                        country={person.country ? person.country : null}
                        birthday={person.birthday}
                        deathday={person.deathday}
                        gender={person.gender}
                    />
                );
            })}
        </div>
    );
}
