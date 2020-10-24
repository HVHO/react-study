import React, {Component} from 'react';
import { render } from 'react-dom';

function Tile(props) {
    return (
        <div>
            <button onClick={()=> props.onClick}> 
                X
            </button>
            <li> {props.value} </li>
        </div>
    );
}

export default Tile;