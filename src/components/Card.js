import React from 'react';

function Card(props) {
    return (
        <div className='bg-light-blue dib br3 bw2 pa3 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${props.id}.png?200x200`} alt='robots' />
            <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;
