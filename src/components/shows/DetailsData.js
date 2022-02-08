import React from "react";
import { DetailsWrapper } from "./shows-styles/Details.styled";

export default function DetailsData({ status, premiered, network }) {
    return (
        <DetailsWrapper>
            <p className="detail-data--wrapper-p">
                Status: <span className="detail-data--wrapper-s">{status}</span>
            </p>
            <p className="detail-data--wrapper">
                Premiered {premiered} {network ? `on ${network.name}` : null}
            </p>
        </DetailsWrapper>
    );
}
