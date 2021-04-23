import React from "react";

export const List = (props) => {
    return (
        <div className="row pt-3">
            <div className="col-md-1">
                {props.icon}
            </div>
            <div className="col-md-10">
                {props.text}
            </div>
        </div>
    );
}