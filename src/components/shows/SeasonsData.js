import React from "react";
import { SeasonsWrapper, SeasonDataList } from "./shows-styles/Seasons.styled";

export default function SeasonsData({ seasons }) {
    return (
        <SeasonsWrapper>
            <p>
                Seasons in total: <span>{seasons.length}</span>
            </p>
            <p>
                Episodes in total:{" "}
                <span>
                    {seasons.reduce(
                        (acc, season) => acc + season.episodeOrder,
                        0
                    )}
                </span>
            </p>
            <SeasonDataList>
                {seasons.map((season) => (
                    <div key={season.id} className="seasons-data-item">
                        <div className="left">
                            <p>Season {season.number}</p>
                            <p>
                                Episodes: <span>{season.episodeOrder}</span>
                            </p>
                        </div>
                        <div className="right">
                            Aired:{" "}
                            <span>
                                {season.premiereDate} - {season.endDate}
                            </span>
                        </div>
                    </div>
                ))}
            </SeasonDataList>
        </SeasonsWrapper>
    );
}
