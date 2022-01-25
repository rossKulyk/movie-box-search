import React from "react";
import notFound from "../../img/not-found.png";

export default function CastData({ cast }) {
    // console.log("CastData cast > ", cast);
    return (
        <div>
            <p>cast:{cast}</p>
            {cast.length
                ? cast.map(({ person, character, voice }, key) => (
                      <div key={key}>
                          <div>
                              <img
                                  src={
                                      person.image
                                          ? person.image.medium
                                          : notFound
                                  }
                                  alt="cast-person"
                              />
                          </div>
                          <div>
                              <span>
                                  {person.name} | {character.name}{" "}
                                  {voice ? "| Voice" : ""}
                              </span>
                          </div>
                      </div>
                  ))
                : "N/A"}
        </div>
    );
}
