import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import { apiGet } from "../../misc/config";
import ShowMainData from "../shows/ShowMainData";
import DetailsData from "../shows/DetailsData";
import SeasonsData from "../shows/SeasonsData";
import CastData from "../shows/CastData";

const initState = {
    show: null,
    isLoading: true,
    errorMsg: null
};

// create reducer
// TODO: create action types file to import
const reducer = (prevState, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { isLoading: false, errorMsg: null, show: action.show };
        case "FETCH_FAIL":
            return {
                ...prevState,
                isLoading: false,
                errorMsg: action.errorMsg,
                show: null
            };
        default:
            return prevState;
    }
};

export default function ShowPage() {
    // const [show, setShow] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [errorMsg, setError] = useState(null);

    const { id } = useParams();
    // Implemeting useReducer instead of useState
    const [{ show, errorMsg, isLoading }, dispatch] = useReducer(
        reducer,
        initState
    );

    useEffect(() => {
        // Var to indicate if component is mounted or not, and do clean-up
        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then((result) => {
                if (isMounted) {
                    dispatch({ type: "FETCH_SUCCESS", show: result });
                    // setShow(result);
                    // setIsLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    dispatch({ type: "FETCH_FAIL", errorMsg: err.message });
                    // setError(err.message);
                    // setIsLoading(false);
                }
            });
        // do the cleanup
        return () => {
            // console.log("ShowPage useEffect cleanup ");
            isMounted = false;
        };
    }, [id]);

    console.log("ShowPage useReducer SHOW > ", show);

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
