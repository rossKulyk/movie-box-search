import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../misc/config";

export default function ShowPage() {
    // custom hook
    const { id } = useParams();
    const [show, setShow] = useState(null);
    console.log("ShowPage useParams:id > ", id);

    useEffect(() => {
        console.log("ShowPage use effect run!");
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result) => {
            setShow(result);
        });
    }, [id]);

    console.log("ShowPage showState", show);

    return <div>Single Show Page</div>;
}
