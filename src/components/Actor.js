import React from 'react';

const Actor = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={"Tom"}/>
        </div>
    );
};

export default Actor;