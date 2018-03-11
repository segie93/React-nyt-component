import React from 'react';
import { render } from 'react-dom';

export class Content extends React.Component{
    render(){
        const data = this.props.data;

        return(            
            <div className="content">
                <div className="block">
                    <div className="section">
                        <h3 className="title">{data.section1.topic}</h3>
                        <h4 className="article-heading"><a href="#">{data.section1.title}</a></h4>
                        <div className="article">
                            <div>
                                {data.section1.description}
                            </div>
                            <div>
                                <img src={data.section1.image} />
                            </div>
                        </div>
                        <div className="slideshow">
                            <ul>
                                <li>
                                    <img src="../images/cam.png" />
                                    <a href="#">Slide Show</a>
                                </li>
                            </ul>    
                        </div>
                    </div>
                    <div className="section">
                        <h3 className="title">{data.section2.topic}</h3>
                        <div className="references">
                            <ul>
                                {data.section2.links.map((name,key)=> {
                                    return <li key={key}><a href="#">{name}</a></li>
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>           
                <hr />
                <div className="block bottom-block">
                    <div className="section bottom-left-section">
                        <img src={data.section3.image} />
                    </div>
                    <div className="section bottom-right-section">
                        {data.section4.links.map((name,key)=> {
                            return <div key={key}><a href="#">{name}</a></div>
                            }
                        )}
                        <div className="bottom-right-section">
                            <img src={data.section4.image} />
                        </div>
                    </div>
                </div>
                <hr />
            </div>          
        )
    }
}