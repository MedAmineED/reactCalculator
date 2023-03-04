import React from 'react';
// import App from '../App';


class Button extends React.Component {
  constructor(props) {
                super(props);
                this.state = {
                        value : this.props.value,
                };
  }
  
  handleClick() {
        if(this.props.func)this.props.func(this.props.value)
    }

  render () {
        if(this.props.className) {
            return <button className={this.props.className} onClick = {this.handleClick.bind(this)}>{this.props.value}</button>
        }else {
            return <button onClick = {this.handleClick.bind(this)}>{this.props.value}</button>
        }
      
  }
}


class OperationBtn extends Button {
    // constructor(props) {
    //     super(props);
    //     this.operation = props.operation;
    // }
    // handleClick() {
    //     this.operation(this.props.value)
    // }
}

class AcAndDeletBtn extends Button {
    // constructor(props) {
    //     super(props);
    //     this.className = props.className;
    // }
}

export  {Button, OperationBtn, AcAndDeletBtn}