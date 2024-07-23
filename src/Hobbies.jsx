import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Hobbies = (props) => {
    return (
        <div>
            <h2>My Hobbies: </h2>
            <ol>
                <li>My favourite hobby is {props.best}</li>
                <li>My second-favourite hobby is {props.outdoor}</li>
                <li>I also like {props.indoor}</li>
            </ol>
        </div>
    )
}
export default Hobbies;