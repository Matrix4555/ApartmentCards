import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../redux/actions';
import { Card } from './Card';
import '../style.css';

export function Collection() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);

    return(
        <div className="collection">
            <div id="div-add_button">
                <button id="add_button" onClick={() => dispatch(addCard())}>Show More Apartments</button>
            </div>
            <div className="deck">
                {cards.map((el, ind) => <Card key={ind} data={el}/>)}
            </div>
        </div>
    );
}
