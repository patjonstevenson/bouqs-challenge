import React from "react";
import { useHistory } from "react-router-dom";

export default ({ path = null }) => {
    const history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        if (!path) {
            history.goBack();
        } else {
            history.push(path);
        }
    }

    return <button className="back-button" onClick={handleClick}>Back</button>
}