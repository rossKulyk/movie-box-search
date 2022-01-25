import React from "react";
import notFound from "../../img/not-found.png";

export default function CastData({ cast }) {
    // console.log("CastData cast > ", cast);
    return (
        <div className="cast-data--wrapper">
            {cast.length
                ? cast.map(({ person, character, voice }, key) => (
                      <div key={key} className="cast-data--item">
                          <div className="cast-data--img-wrapper">
                              <img
                                  src={
                                      person.image
                                          ? person.image.medium
                                          : notFound
                                  }
                                  alt="cast-person"
                                  className="cast-data--img"
                              />
                          </div>
                          <div className="cast-data--actor">
                              <span>
                                  <span style={{ fontWeight: "bold" }}>
                                      {person.name}
                                  </span>
                                  | {character.name} {voice ? "| Voice" : ""}
                              </span>
                          </div>
                      </div>
                  ))
                : "N/A"}
        </div>
    );
}
