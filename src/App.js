import React from 'react';

class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(console.log)
  }
  render(){
    return (
      <div>
       
      </div>
    );
  }
  
}

export default App;
