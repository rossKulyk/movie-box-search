import React from "react";
import { useLocation } from "react-router-dom";
import { NavList, LinkStyled } from "./Navs.styled";

const LINKS = [
    { to: "/", text: "Home" },
    { to: "/stars", text: "Stars" }
];

export default function Navs() {
    const location = useLocation();
    console.log("NAV LOCATION > ", location);
    return (
        <div>
            <NavList>
                {LINKS.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <LinkStyled
                                to={item.to}
                                className={
                                    item.to === location.pathname
                                        ? "active"
                                        : ""
                                }
                            >
                                {item.text}
                            </LinkStyled>
                        </li>
                    );
                })}
            </NavList>
        </div>
    );
}
