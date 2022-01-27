// business logic and map elements
import React from "react";
import FadeIn from "react-fade-in";

import ActorCard from "./ActorCard";
import notFound from "../../img/not-found.png";

export default function ActorGrid({ data }) {
    // console.log("ActorGrid data > ", data);
    return (
        <FadeIn delay="100" className="show-grid--flex">
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
        </FadeIn>
    );
}
