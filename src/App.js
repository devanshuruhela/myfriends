import React from 'react';
import CardList from './CardList'
import { friend } from './friend';
import SearchBox from './SearchBox';

const App = ()=>
{

  return(
    <div className='tc'>
      <h1>My Friends</h1>
      <SearchBox/>
      <CardList friend={friend}/>
    </div>
  );

}

export default App;