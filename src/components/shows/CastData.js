import React from "react";
import notFound from "../../img/not-found.png";
import { CastListWrapper } from "./shows-styles/Cast.styled";

export default function CastData({ cast }) {
    // console.log("CastData cast > ", cast);
    return (
        <CastListWrapper>
            {cast.length
                ? cast.map(({ person, character, voice }, key) => (
                      <div key={key} className="cast-list--item">
                          <div className="cast-list--img-wrapper">
                              <img
                                  src={
                                      person.image
                                          ? person.image.medium
                                          : notFound
                                  }
                                  alt="cast-person"
                                  className="cast-list--img"
                              />
                          </div>
                          <div className="cast-list--actor">
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
        </CastListWrapper>
    );
}
