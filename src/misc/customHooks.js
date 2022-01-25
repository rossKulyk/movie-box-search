/* eslint-disable no-console */
import { useReducer, useEffect, useState } from "react";
import { apiGet } from "./config";
import { ADD, REMOVE, FETCH_SUCCESS, FETCH_FAIL } from "./actionTypes";

// => create reducer for useShows custom hook
function showsReducer(prevState, action) {
    switch (action.type) {
        case ADD: {
            return [...prevState, action.showId];
        }
        case REMOVE: {
            return prevState.filter((showId) => showId !== action.showId);
        }
        default:
            return prevState;
    }
}

// => Custom hook to read/write from local storage. Key arg is used as
function usePersistedReducer(reducer, initState, key) {
    console.log("usePersistedReducer HOOK, passed key > ", key);

    // 3rd arg computes and returns init state regardless of what is passed in 2nd arg
    const [state, dispatch] = useReducer(reducer, initState, (initial) => {
        const persistedData = localStorage.getItem(key);
        console.log("usePersistedReducer HOOK, persisted > ", persistedData);
        // convert back to obj
        return persistedData ? JSON.parse(persistedData) : initial;
    });

    // Syncronize state whenever update happens in local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    console.log("usePersistedReducer HOOK, state > ", state);
    // return array of state,dispatch as normal useReducer does
    return [state, dispatch];
}

// => hook to return usePersistedReducer custom hook
export function useShows(key = "shows") {
    return usePersistedReducer(showsReducer, [], key);
}

// => hook for data persistence inside search bar, to hold the search state after refreshing the page using local storage
export function useLastQuery(key = "lastQuery") {
    // callback func (or initialization func) to lazy evaluate the state, used when perform some computation to set the value for init-state.
    // calculated only once when state is initialized, otherwise react would recalculate on every re-render
    const [input, setInput] = useState(() => {
        const persistedData = sessionStorage.getItem(key);
        console.log("useLastQuery persistedData > ", persistedData);
        // convert back to obj
        return persistedData ? JSON.parse(persistedData) : "";
    });

    // setInput with newState, set key-item to session storeage
    function setPersistedInput(newState) {
        setInput(newState);
        console.log("useLastQuery, setPersistedInput() newState > ", newState);
        sessionStorage.setItem(key, JSON.stringify(newState));
    }

    // return input/setInput as useState
    return [input, setPersistedInput];
}

// => create reducer for fetch API hook
const fetchReducer = (prevState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return { isLoading: false, errorMsg: null, show: action.show };
        case FETCH_FAIL:
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

// => hook to fetch the API data and return state with updated data
export function useShowPageHook(showId) {
    //
    const [state, dispatch] = useReducer(fetchReducer, {
        show: null,
        isLoading: true,
        errorMsg: null
    });
    useEffect(() => {
        // Var to indicate if component is mounted or not, and do clean-up
        let isMounted = true;

        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
            .then((result) => {
                if (isMounted) {
                    dispatch({ type: FETCH_SUCCESS, show: result });
                    // setShow(result);
                    // setIsLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    dispatch({ type: FETCH_FAIL, errorMsg: err.message });
                    // setError(err.message);
                    // setIsLoading(false);
                }
            });
        // do the cleanup
        return () => {
            isMounted = false;
        };
    }, [showId]);

    return state;
}
