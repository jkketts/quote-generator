import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {content: '', title: ''};
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick() {
        fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            var str = jsonData[0].content;
            str = jsonData[0].content.slice(3,(str.length-5));
            this.setState({content:str, title:jsonData[0].title});
        })
    }
    
    componentDidMount(){ 
           this.handleClick();
       }
    
    render() {
    return (
        <div>
            <p>{this.state.content}</p>
            <p>-{this.state.title}</p>
            <button onClick={this.handleClick}>New Quote</button>
        </div>
    );
    }
  }

export default App;