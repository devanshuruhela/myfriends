import React from 'react';
import Card from './Card'

const CardList=({friend})=>
{
  const CardComponent 
  = friend.map((user, index)=>{
    return <Card key={index} id={friend[index].id} name={friend[index].name} email={friend[index].email}/>;
  })
  return(
    <div>
      {CardComponent}
    </div>
  );
}
export default CardList;