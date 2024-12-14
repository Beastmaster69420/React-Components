import React from 'react';
import { useState } from 'react';
interface listprop{
    items:string[];
    heading:string;
    onSelection: (item:string) => void;
}
function ListGroup({items,heading,onSelection}:listprop) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
            {items.length=== 0 && <p>'No Items Found'</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item"
                                : "list-group-item active"
                        }
                        key={item}
                        onClick={() => { setSelectedIndex(index) 
                            onSelection(item)
                        }}> {item} </li>))}
            </ul >
        </>
    );
}
export default ListGroup;