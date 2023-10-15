import React from 'react';
import { useState, useEffect } from 'react';

const List = (props) => {

    const [listOrder, setListOrder] = useState([]);

    useEffect(() => {
        let ogList = [];

        props.list.forEach((item) => {
            ogList.push(item);
        })

        setListOrder(ogList);
    }, [listOrder]);

    const RandomizeOrder = () => {
        let newList = props.list;
        for (let i = newList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = newList[i]
            newList[i] = newList[j]
            newList[j] = temp
        }
        setListOrder(newList);
        console.log(listOrder);
    }

    const PrintListOrder = () => {
        return (
            <div>
                {
                    listOrder.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </div>
        );
    }
    return (
        <div>
            <ul>
                <button onClick={RandomizeOrder}>Randomize</button>
            </ul>

            <ul>
                {PrintListOrder()}
            </ul>
        </div>
    )
};

export default List;
