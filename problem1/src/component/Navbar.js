import React from 'react';
import { render } from 'react-dom';

export class Navbar extends React.Component{

    update(key,e){
        this.props.updateTab(key,e);
    }

    render(){
        const links = this.props.data;
        const curr = this.props.currTab;
        return(
            <div className="navbar">
                {links.map((name,key)=> {
                    return <a className={curr == key ? "selected" : ""} 
                     href="#" key={key} onClick={(e) => this.update(key,e)}>{name.tab}</a>
                    }
                )}
            </div>
        )
    }
}