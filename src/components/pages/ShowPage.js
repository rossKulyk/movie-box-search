import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShowPage() {
    // custom hook
    const { id } = useParams();
    console.log("ShowPage useParams:id > ", id);

    useEffect(() => {
        console.log("ShowPage use effect run!");
    }, []);
    return <div>Single Show Page</div>;
}
