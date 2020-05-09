import React from 'react';
import './Tooltip.css';


function ToolTip(props){
    return(
        <span className="ToolTip">
            <span className="ToolTip-content" style={{color: props.color}}>
                {props.children}
            </span>
            <div className="ToolTip-message">
                {props.message}
            </div>
        </span>
    )

}

class ToolTipClass extends React.Component{
    static defaultProps = {
        color: '#01A800', // green
      };
     
    render(){
        console.log('Using a class component!')
        console.log(this.props)
        return (
          <span className='Tooltip'>
            <span
              className='Tooltip-content'
              style={{ color: this.props.color }}
            >
              {this.props.children}
            </span>
            <div className='Tooltip-message'>
              {this.props.message}
            </div>
          </span>
        )
    }
}


export default ToolTipClass;