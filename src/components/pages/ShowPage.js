import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../misc/config";

export default function ShowPage() {
    // custom hook
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setError] = useState(null);

    useEffect(() => {
        // Var to indicate if component is mounted or not, and do clean-up
        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then((result) => {
                if (isMounted) {
                    setShow(result);
                    setIsLoading(false);
                }
                // TESTING:
                // setTimeout(() => {
                //     if (isMounted) {
                //         setShow(result);
                //         setIsLoading(false);
                //     }
                // }, 2000);
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.message);
                    setIsLoading(false);
                }
            });
        // do the cleanup
        return () => {
            // console.log("ShowPage useEffect cleanup ");
            isMounted = false;
        };
    }, [id]);

    console.log("ShowPage show > ", show);

    if (isLoading) return <div>Data is loading</div>;

    if (errorMsg) return <div>Error is occured: {errorMsg}</div>;

    return <div>Single Show Page:</div>;
}
