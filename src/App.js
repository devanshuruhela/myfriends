import React , {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox';


class App extends Component
{
  constructor()
  {
    super()
    this.state=
    {
      friend : [],
      searchfield:''
    }
  }
  onsearchnames=(event)=>{
    this.setState({searchfield : event.target.value})
    //console.log(filternames);
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
      return Response.json();
    }).then(users=>
      {
        this.setState({friend:users})
      })
  }

render(){
    const filternames = this.state.friend.filter(frien=>{
      return frien.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.friend.lenght===0)
    {
      return <h1>Loading...</h1>
    }
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