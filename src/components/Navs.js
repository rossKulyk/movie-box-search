import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
    { to: "/", text: "Home" },
    { to: "/start", text: "Start" }
];

export default function Navs() {
    return (
        <div>
            <ul>
                {LINKS.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <Link to={item.to}>{item.text}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
