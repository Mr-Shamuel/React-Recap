import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friendsName =['Asif','Hridoy','Shawon','Murad'];
  const friendsDetails={
    name:'Raju',
    age:20,
    department:"SWI",
    Gmail:'Sam23@gmail.com'
  }

  const nayok=[{name:'Raju', age:20,department:"SWI"},{name:'Amjad', age:30,department:"BBA"},{name:'Sojib', age:33,department:"CSE"}]
  // const nayok=[{name:'Raju', age:20,department:"SWI"}]

// Using API
const[user,setUser]=useState([])
 useEffect(()=>{
   fetch('https://randomuser.me/api/?results=10')
   .then(res=>res.json())
   .then(data=>setUser(data.results))
  //  .then(data=>console.log(data.results))

 },[])




  return (
         <div className="App">
           
           {
             
              user.map(x=><li>{x.email}</li>)
           }
           {
              user.map(x=><li>{x.name.title} {x.name.first} {x.name.last}</li>)
           }







           {
            nayok.map(x=><li>{x.name}</li>)

           }
           {
              nayok.map(y=> <Demo name={y.name} dept={y.age}></Demo>)
           }

           <Movie></Movie>
           <Movie></Movie>
          
            <Demo name="United" dept="CSE" ></Demo>
            <Demo name="Independent" dept="BBA"></Demo>
            <Demo name={friendsName[0]}></Demo>
            <Demo name={friendsDetails.department} dept={friendsDetails.Gmail}></Demo>
            <Demo name={friendsName[0]}></Demo>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
      </header>
    </div>
  );
}




function Movie(){
  const [count,setCount] = useState(0);

  const movieAdd=()=>setCount(count+1);
  const movieRem=()=>setCount(count-1);

  return(
  <div>
    <button onClick={movieAdd}>Add Movie</button>
    <button onClick={movieRem}>Remove Movie</button>
    <h2>Total Movie: {count} </h2>
  </div>
  )
}

function Demo(props){
  return(
    <div style={{border:'1px solid red',margin:'10px'}}>
      <h2>{props.name} International University</h2>
      <h4>Dept of {props.dept || "LLB"}</h4>
    </div>
  )
}


export default App;
