import React from 'react';
import { render } from 'react-dom';
import css from 'main.css';
//import json from "./data/data.json";
import { Navbar } from "./component/Navbar";
import { Content } from "./component/Content";

class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
        selected : 0,
        isLoading: true,
        data:{}      
    }
  }

  componentDidMount() {
    fetch("./data/data.json")
      .then(response => response.json())
      .then(resp => {
        this.setState({ 
          data: resp,
          isLoading: false 
        })
      });
  }

  updateTab(key){
      this.setState({
        selected : key
      }); 
  }

  // getData(){
  //   return this.state.data.secret[this.state.selected];
  // }
    render() {
      const { data, isLoading, selected } = this.state;

      if (isLoading) {
        return <p>Loading ...</p>;
      }
        return (
          <div className="container">
            <Navbar data={data.secret} currTab={selected} updateTab={this.updateTab.bind(this)}/>
            <Content data={data.secret[selected]}/>
            <div className="footer">
                <a href="#">Place a classfified ad &#187;</a>
            </div>
          </div>
        )
    }
}

render(<App />, document.getElementById('app'));
