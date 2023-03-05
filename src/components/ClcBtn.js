import React from 'react';


class Button extends React.Component {
  constructor(props) {
                super(props);
                this.state = {
                        value : this.props.value,
                };
  }
  
  handleClick() {

        if(this.props.func && this.props.value !== "x"){
            this.props.func(this.props.value)
        }else if(this.props.func && this.props.value === "x") {
            this.props.func("*")
        }
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
    //I used a class to give each button a name that reflects its function, and to allow for adding features to this component in the future.
}

class AcAndDeletBtn extends Button {
    //I used a class to give each button a name that reflects its function, and to allow for adding features to this component in the future.
}

export  {Button, OperationBtn, AcAndDeletBtn}