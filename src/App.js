import logo from './logo.svg';
import './App.css';
import React from "react";

const movies=[
  {
     "name":"Movie 2",
     "description":"This is movie 2",
     "rating":5.0,
     "image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"
  },
  {
     "name":"Movie 3",
     "description":"This is movie 3",
     "rating":5.0,
     "image":"http://127.0.0.1:8000/media/Images/None/sampleImg.jpg"
  },
];
class App extends React.Component {

  constructor(props){
    super(props)
    this.state={movies};
  }
  render(){
    return (
      <div className="App">
        {this.state.movies.map((movie)=>(
          <div key={movie.id}>
            <h1>{movie.name}</h1>
            <h2>{movie.description}</h2>

          </div>
        ))}
      </div>
    );

  }
  
}

export default App;
