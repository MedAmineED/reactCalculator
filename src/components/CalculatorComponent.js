import React from 'react';
import {Button, OperationBtn, AcAndDeletBtn} from './ClcBtn';

class Calculator extends React.Component {
    constructor (props) {
        super(props);
        this.state =  {numberStr : '',
                        result : 0 };
        this.number = 0;
        this.allNums = [];
        this.myResult = 0;
        this.createNumber = this.createNumber.bind(this);

        this.calculate = this.calculateNums.bind(this);
      }
      
      createNumber (strN) {
          this.setState((state, props) => {
              return { numberStr : state.numberStr + strN}
          });

           this.number = `${this.number}${strN}`;
          if(typeof(strN)== 'string' && strN !== ".") {
            this.calculateNums(strN, this.number)
          };
      }
      calculateNums(op, num) {
           this.allNums.push(parseInt(num));
           this.allNums.push(op);
          if (op === "="){
              let currentOperator = '+';
              let tempResult = 0;
            
              for (let i = 0; i < this.allNums.length; i++) {
                const elem = this.allNums[i];
                this.calculationLogic(elem, currentOperator, tempResult);
              }
              this.myResult += tempResult;
              this.allNums=[];
            }
            this.displayResult();
          this.number = 0;
      }
      calculationLogic (elem, currentOperator, tempResult) {
        if (typeof elem === 'number') {
            if (currentOperator === '+') {
              this.myResult += tempResult; 
              tempResult = elem; 
            } else if (currentOperator === '-') {
              tempResult -= elem; 
            }else if (currentOperator === 'x') {
              tempResult *= elem; 
            } else if (currentOperator === '/') {
              tempResult /= elem; 
            }
          } else if (typeof elem === 'string') {
            currentOperator = elem; 
            if (currentOperator === '+') {
              this.myResult += tempResult; 
              tempResult = 0; 
            }
          }
      }
      displayResult () {
        this.setState(()=> {
            return { result : this.myResult,
                      numberStr : '0'  
                     }})
      }
      render () {
        return <div className="calculator-grid">
                    <div className='output'>
                        <div className='previous-operand'>{this.state.numberStr}</div>
                        <div className='current-operand'>{this.state.result}</div>
                    </div>
                    <AcAndDeletBtn value = "AC" className='span-two'/>
                    <AcAndDeletBtn value ="DEL" />
                    <OperationBtn value = "/" func = {this.createNumber}/>
                    <Button value = {1} func = {this.createNumber}/>
                    <Button value = {2} func = {this.createNumber}/>
                    <Button value = {3} func = {this.createNumber}/>
                    <OperationBtn value = "x" func = {this.createNumber}/>
                    <Button value = {4} func = {this.createNumber}/>
                    <Button value = {5} func = {this.createNumber}/>
                    <Button value = {6} func = {this.createNumber}/>
                    <OperationBtn value = "-" func = {this.createNumber}/>
                    <Button value = {7} func = {this.createNumber}/>
                    <Button value = {8} func = {this.createNumber}/>
                    <Button value = {9} func = {this.createNumber}/>
                    <OperationBtn value = "+" func = {this.createNumber}/>
                    <Button value = "." func = {this.createNumber} />
                    <Button value = {0} func = {this.createNumber}/>
                    <OperationBtn value = "=" className = 'span-two' func = {this.createNumber}/>
                </div>
      }
}

export default Calculator;