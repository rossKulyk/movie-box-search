/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import { useShowPageHook } from "../../misc/customHooks";
import ShowMainData from "../shows/ShowMainData";
import DetailsData from "../shows/DetailsData";
import SeasonsData from "../shows/SeasonsData";
import CastData from "../shows/CastData";

export default function ShowPage() {
    const { id } = useParams();
    // custom hook to fetch API data and return state with updated data
    const { show, isLoading, errorMsg } = useShowPageHook(id);

    if (isLoading) return <div>Data is loading</div>;
    if (errorMsg) return <div>Error is occured: {errorMsg}</div>;

    return (
        <div className="show-page--wrapper">
            Single Show Page:
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                tags={show.genres}
                summary={show.summary}
            />
            <div className="show-page--info">
                <h2>Details</h2>
                <DetailsData
                    network={show.network}
                    status={show.status}
                    premiered={show.premiered}
                />
            </div>
            <div className="show-page--info">
                <h2>Seasons</h2>
                {/* eslint-disable-next-line no-underscore-dangle */}
                <SeasonsData seasons={show._embedded.seasons} />
            </div>
            <div className="show-page--info">
                <h2>Cast</h2>
                {/* eslint-disable-next-line no-underscore-dangle */}
                <CastData cast={show._embedded.cast} />
            </div>
        </div>
    );
}
