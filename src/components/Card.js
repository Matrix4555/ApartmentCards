import React from 'react';
import { useDispatch } from 'react-redux';
import { like } from '../redux/actions';
import '../card.css';

export function Card(props) {

    const dispatch = useDispatch();
    const data = props.data;

    return(
        <div className="card">
            <img className="card-img" src={data.img}/>
            <div className="card-street">{data.street}</div>
            <div className="card-description">{data.description}</div>
            <div className="card-price_rooms">
                <div className="card-price">{data.price}</div>
                <div className="card-rooms">Number of rooms: {data.rooms}</div>
            </div>
            <div className="card-phone-like">
                <div className="card-phone">{data.phone}</div>
                <button className="card-like" onClick={() => dispatch(like(data.id - 1))}>
                    <img className="card-like-img" src={data.like ? '/img/like-active.png' : '/img/like.png'} width="25px" height="25px"/>
                </button>
            </div>
        </div>
    );
}
