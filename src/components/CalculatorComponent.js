import React from 'react';
import {Button, OperationBtn, AcAndDeletBtn} from './ClcBtn';

class Calculator extends React.Component {
    constructor (props) {
        super(props);
        this.state =  {numberStr : '',
                        oneClick : "isBlocket" };
        this.myResult = 0;
        this.createNumber = this.createNumber.bind(this);
      }
      
      createNumber(strN) {
            this.clickOneTimeOnOperator(strN)
            if(strN !== '=') {
                  this.setState((state) => {
                  return { numberStr: state.numberStr + strN }
                });
                
            }else{
              this.showResult(this.state.numberStr, strN );
             }
      };
      clickOneTimeOnOperator (strN) {
            if(strN === "+" || strN === "*" || strN === "/" || strN === "-") {
              this.setState(() => {
                      return {oneClick : "isBlocket"}
                    })
            }else {
              this.setState(()=> {
                return {oneClick : "canClick"}
              })
            }
      }
      showResult(strNum, strOp) {
        if (strOp === "=") {
          this.myResult = eval(strNum);
          this.setState(() => {
            return {
              result: this.myResult,
              numberStr: '0'
            }
          })
        }
        this.number = 0;
      }
      
      render () {
        return <div className="calculator-grid">
                    <div className='output'>
                        <div className='previous-operand'>{this.state.numberStr}</div>
                        <div className='current-operand'>{this.state.result}</div>
                    </div>
                    <AcAndDeletBtn value = "AC" className='span-two'/>
                    <AcAndDeletBtn value ="DEL" />
                    <OperationBtn className={this.state.oneClick} value = "/" func = {this.createNumber}/>
                    <Button value = {1} func = {this.createNumber}/>
                    <Button value = {2} func = {this.createNumber}/>
                    <Button value = {3} func = {this.createNumber}/>
                    <OperationBtn className={this.state.oneClick} value = "x" func = {this.createNumber}/>
                    <Button value = {4} func = {this.createNumber}/>
                    <Button value = {5} func = {this.createNumber}/>
                    <Button value = {6} func = {this.createNumber}/>
                    <OperationBtn className={this.state.oneClick} value = "-" func = {this.createNumber}/>
                    <Button value = {7} func = {this.createNumber}/>
                    <Button value = {8} func = {this.createNumber}/>
                    <Button value = {9} func = {this.createNumber}/>
                    <OperationBtn className={this.state.oneClick} value = "+" func = {this.createNumber}/>
                    <Button value = "." func = {this.createNumber} />
                    <Button value = {0} func = {this.createNumber}/>
                    <OperationBtn  value = "=" className = {`span-two ${this.state.oneClick}`} func = {this.createNumber}/>
                </div>
      }
}

export default Calculator;