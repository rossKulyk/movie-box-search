import React from "react";

export default function Title({ title, subtitle }) {
    return (
        <div className="title-wrapper">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
