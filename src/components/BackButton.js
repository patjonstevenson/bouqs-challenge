import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
    const history = useHistory()
    console.log("history: ", history);
    const handleClick = e => {
        e.preventDefault();
        history.goBack();

    }
    return <button onClick={handleClick}>Back</button>
}