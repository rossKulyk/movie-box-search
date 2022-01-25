import React from "react";

export default function SeasonsData({ seasons }) {
    return (
        <div className="seasons-data--wrapper">
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
            <div className="seasons-data--list">
                {seasons.map((season) => (
                    <div key={season.id} className="seasons-data--item">
                        <div className="seasons-data--left">
                            <p>Season {season.number}</p>
                            <p>
                                Episodes: <span>{season.episodeOrder}</span>
                            </p>
                        </div>
                        <div className="seasons-data--right">
                            Aired:{" "}
                            <span>
                                {season.premiereDate} - {season.endDate}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
