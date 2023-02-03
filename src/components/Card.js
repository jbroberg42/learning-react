import React from 'react';

const Card = ({id, email, name}) => {
    return (
        <div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='profile pic'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    )
}

export default Card;