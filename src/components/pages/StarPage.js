/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MainPageLayout from "../MainPageLayout";
import ShowGrid from "../shows/ShowGrid";
import { useShows } from "../../misc/customHooks";
import { apiGet } from "../../misc/config";

export default function StarPage() {
    // no need of dispatch
    const [starShows] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setError] = useState(null);

    useEffect(() => {
        // console.log("StarPage starShows from useShow() > ", starShows);
        if (starShows && starShows.length > 0) {
            // do multiple api calls and create promises array with all shows that contain showId from local storage
            const promises = starShows.map((showId) =>
                apiGet(`/shows/${showId}`)
            );
            // resolve array of promises with all shows
            Promise.all(promises)
                .then((apiData) => {
                    // console.log("Promise.all APIdata > ", apiData);
                    return apiData.map((show) => ({ show }));
                })
                .then((results) => {
                    // console.log("Promise.all results > ", results);
                    setShows(results);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [starShows]);

    return (
        <MainPageLayout>
            Star Page: {isLoading && <div>Shows are still loading...</div>}
            {errorMsg && <div>Error occured: {errorMsg}</div>}
            {!isLoading && !shows && <div>Noshows to dislay!</div>}
            {!isLoading && !errorMsg && shows && <ShowGrid data={shows} />}
        </MainPageLayout>
    );
}
