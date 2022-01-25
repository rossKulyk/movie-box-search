import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../misc/config";

const initState = {
    show: null,
    isLoading: true,
    errorMsg: null
};

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
    const [state, dispatch] = useReducer(reducer, initState);
    console.log("ShowPage STATE > ", state);

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

    // console.log("ShowPage show > ", show);

    // if (isLoading) return <div>Data is loading</div>;
    // if (errorMsg) return <div>Error is occured: {errorMsg}</div>;

    return <div>Single Show Page:</div>;
}
