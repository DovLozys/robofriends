import React from 'react';
import Card from './Card';

function CardList({robots}) {
    return (
        robots.map(item => {
            return <Card key={item.id} id={item.id} name={item.name} email={item.email}/>
        })
    )
}

export default CardList;
