import React from 'react';


const Card=(props)=>{
  const {name , id , email} = props;
  return(
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='friend' src={`https://robohash.org/ ${id} ?200x200`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;