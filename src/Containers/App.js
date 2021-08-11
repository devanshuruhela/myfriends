//Upgrading project with hooks
import React , { useState , useEffect} from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundry';
function App()
{
 
  // constructor()
  // {
  //   super()
  //   this.state=
  //   {
  //     friend : [],
  //     searchfield:''
  //   }
  // }
   const [friend, setfriend] = useState([]);
   const [searchfield, setsearchfield] = useState("");
  const onsearchnames=(event)=>{
    setsearchfield(event.target.value)
    //console.log(filternames);
  }

  // componentDidMount()
  // {
  //   fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
  //     return Response.json();
  //   }).then(users=>
  //     {
  //       this.setState({friend:users})
  //     })
  // }
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
      return Response.json();
    }).then(users=>
      {
        setfriend(users)
      })
  },[])


    const filternames = friend.filter(frien=>{
      return frien.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(friend.lenght===0)
    {
      return <h1>Loading...</h1>
    }
  return(
    <div className='tc'>
      <h1>MYFRIENDS</h1>
      <SearchBox searchname = {onsearchnames}/>
      <Scroll>
        <ErrorBoundary>
          <CardList friend={filternames}/>
        </ErrorBoundary>
      </Scroll>
    </div>
  );

}

export default App;