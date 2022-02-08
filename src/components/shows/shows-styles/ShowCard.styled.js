import styled from "styled-components";
import { SearchCard } from "../../styled";

// Style components related to show-card components and extend SearchCard styles
export const StyledShowCardWrapper = styled(SearchCard)`
    .showcard-btns {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            text-decoration-color: #000;
            color: #000;
            &:hover {
                text-decoration-color: red;
                color: red;
            }
        }
        button {
            outline: none;
            border: 1px solid #8e8e8e;
            border-radius: 15px;
            padding: 5px 20px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
        }
    }
`;
