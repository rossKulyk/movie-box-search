import React from "react";

export default function DetailsData({ status, premiered, network }) {
    return (
        <div className="detail-data--wrapper">
            <p className="detail-data--wrapper-p">
                Status: <span className="detail-data--wrapper-s">{status}</span>
            </p>
            <p className="detail-data--wrapper">
                Premiered {premiered} {network ? `on ${network.name}` : null}
            </p>
        </div>
    );
}
