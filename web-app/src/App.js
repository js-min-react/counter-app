import React, {Component} from 'react';
import Toc from './components/toc';
import Content from './components/content';


class App extends Component {
 
  state = {
    mode:'read',
    subject:{title:"WEB", sub:"World Wide Web"},
    welcome:{title:'welcome', desc:"Hello, React"},
    contents:[
      {id:1, title:"HTML", desc:"HTML is ..."},
      {id:2, title:"CSS", desc:"CSS is ..."},
      {id:3, title:"JavaScript", desc:"JavaScript is ..."}
    ]
   }

  handleEvent = e => {
    e.preventDefault();
    this.setState({
      mode:'welcome'
    });
  };
    
  render() { 
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <h1><a href="/" onClick={this.handleEvent}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
         <Toc data={this.state.contents} />
         <Content title={_title} desc={_desc} />
         <img src="https://file3.instiz.net/data/file3/2018/02/13/d/c/5/dc5761a4e3e2626519a9605a8c9c322e.gif"></img>
      </div>
      );
  }
}
 
export default App;
