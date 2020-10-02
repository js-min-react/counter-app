import React, { Component } from 'react';

class Toc extends Component {

    handleContent = e => {
        e.props.preventDefault();
        this.props.setState({
          mode:'read'
         });
      };

    render() { 
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}
            onClick={this.handleContent}
            >{data[i].title}</a> </li>);
            i++;
        }

        return ( 
            <div className="Toc">
                <ul>
                    {lists}
                </ul>
            </div>
         );
    }
}
 
export default Toc;