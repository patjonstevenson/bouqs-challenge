import React from "react";
import { useHistory } from "react-router-dom";

export default ({ path = null }) => {
    const history = useHistory();
    console.log("history: ", history);
    console.log("path: ", path);

    const handleClick = e => {
        e.preventDefault();
        if (!path) {
            history.goBack();
        } else {
            history.push(path);
        }
        // 

        console.log("history after push: ", history);
    }
    return <button className="back-button" onClick={handleClick}>Back</button>
}