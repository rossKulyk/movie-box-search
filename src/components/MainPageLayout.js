import React from "react";
import Navs from "./Navs";
import Title from "./Title";

export default function MainPageLayout({ children }) {
    return (
        <div>
            <Title
                title="Movie Box Search"
                subtitle="Are you looking for a movie or an actor?"
            />
            <Navs />
            {children}
        </div>
    );
}
