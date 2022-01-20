import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";

export default function Home() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState(null);

    function onInputchange(evt) {
        setInput(evt.target.value);
        // setInput(evt)
    }

    function onSearch() {
        // https://api.tvmaze.com/search/shows?q=girls
        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        //     .then((response) => response.json())
        //     .then((result) => {
        //         console.log("FETCH RESULT > ", result);
        //         setResults(result);
        //     });
        apiGet(`/search/shows?q=${input}`).then((result) => {
            console.log("onSearch result > ", result);
            setResults(result);
        });
    }

    function onKeyDown(evt) {
        // console.log("EVENT KET CODE", evt.keyCode);
        if (evt.keyCode === 13) {
            onSearch();
        }
    }

    //
    function rendeResults() {
        // return if results are empty
        if (results && results.length === 0) {
            return <div>No results</div>;
        }
        if (results && results.length > 0) {
            return (
                <div>
                    {results.map((item) => {
                        return <div key={item.show.id}>{item.show.name}</div>;
                    })}
                </div>
            );
        }
        return null;
    }

    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputchange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <button type="button" onClick={onSearch}>
                search
            </button>
            {rendeResults()}
        </MainPageLayout>
    );
}
