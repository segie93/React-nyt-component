import React from 'react';
import { render } from 'react-dom';

export class Navbar extends React.Component{

    update(key){
        this.props.updateTab(key);
    }

    render(){
        const links = this.props.data;
        const curr = this.props.currTab;
        return(
            <div className="navbar">
                {links.map((name,key)=> {
                    return <a className={curr == key ? "selected" : ""} 
                     href="#" key={key} onClick={() => this.update(key)}>{name.tab}</a>
                    }
                )}
            </div>
        )
    }
}