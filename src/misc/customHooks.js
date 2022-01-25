/* eslint-disable no-console */
import { useReducer, useEffect } from "react";

// create reducer
// TODO: create action types file to import
function showsReducer(prevState, action) {
    switch (action.type) {
        case "ADD": {
            return [...prevState, action.showId];
        }
        case "REMOVE": {
            return prevState.filter((showId) => showId !== action.showId);
        }
        default:
            return prevState;
    }
}

// Custom hook to read/write from local storage. Key arg is used as
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

// Custom hook to return usePersistedReducer custom hook
export function useShows(key = "shows") {
    return usePersistedReducer(showsReducer, [], key);
}
