import React from 'react';

const SearchBox = ({searchfiled , searchname}) =>
{
  return(
    <div className='pa2'>
      <input
      className='pa3 ba b--green bg-white br3 shadow-5'
      type='search' 
      placeholder='search friends'
      onChange={searchname}/>
    </div>
  );
}
export default SearchBox;