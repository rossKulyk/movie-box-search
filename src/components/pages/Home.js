import React, { useState, useEffect } from "react";
import MainPageLayout from "../MainPageLayout";
import ShowGrid from "../shows/ShowGrid";
import ActorGrid from "../actors/ActorGrid";
import { apiGet } from "../../misc/config";

export default function Home() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState("shows");
    // boolean to display if searchOption is true
    const isShowsSearch = searchOption === "shows";

    //
    useEffect(() => {
        console.log("HOME use effect run!");
        return () => {
            console.log("HOME use effect EXIT!");
        };
    }, []);

    function onInputchange(evt) {
        setInput(evt.target.value);
        // setInput(evt)
    }

    function onSearch() {
        apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
            // console.log("onSearch result > ", result);
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
            // teneraty, return based on fetched result, item-show or item-person
            return results[0].show ? (
                <ShowGrid data={results} />
            ) : (
                <ActorGrid data={results} />
            );
            // ? results.map((item) => {
            //       return <div key={item.show.id}>{item.show.name}</div>;
            //   })
            // : results.map((item) => {
            //       return <div key={item.person.id}>{item.person.name}</div>;
            //   });
        }
        return null;
    }

    function onRadioChange(evt) {
        setSearchOption(evt.target.value);
    }

    return (
        <MainPageLayout>
            <input
                type="text"
                placeholder="Search"
                onChange={onInputchange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <div>
                <label htmlFor="shows-search">
                    Shows{" "}
                    <input
                        id="shows-search"
                        type="radio"
                        value="shows"
                        onChange={onRadioChange}
                        checked={isShowsSearch}
                    />
                </label>
                <label htmlFor="actors-search">
                    Actors{" "}
                    <input
                        id="actors-search"
                        type="radio"
                        value="people"
                        onChange={onRadioChange}
                        checked={!isShowsSearch}
                    />
                </label>
            </div>
            <button type="button" onClick={onSearch}>
                search
            </button>
            {rendeResults()}
        </MainPageLayout>
    );
}
