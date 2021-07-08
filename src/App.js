import React , {Component} from 'react';
import CardList from './CardList'
import { friend } from './friend';
import SearchBox from './SearchBox';


class App extends Component
{
  constructor()
  {
    super()
    this.state=
    {
      friend : friend,
      searchfield:''
    }
  }
  onsearchnames=(event)=>{
    this.setState({searchfield : event.target.value})
    //console.log(filternames);
  }
render(){
    const filternames = this.state.friend.filter(frien=>{
      return frien.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return(
    <div className='tc'>
      <h1>My Friends</h1>
      <SearchBox searchname = {this.onsearchnames}/>
      <CardList friend={filternames}/>
    </div>
  );
}

}

export default App;