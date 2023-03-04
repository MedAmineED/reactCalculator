import './styles.css';
import React from 'react';
import {Button, OperationBtn, AcAndDeletBtn} from './components/ClcBtn';



class App extends React.Component {
          constructor (props) {
            super(props);
            this.state =  { num : this.props.num,
                            numberStr : '',
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
               console.log("array og all nums", this.allNums);
              if (op === "="){
                this.myResult = this.allNums[0];
                  for(let i =0; i<this.allNums.length; i++) {
                      if (this.allNums[i] === "+") {
                                this.myResult += this.allNums[i+1]
                          }else if(this.allNums[i] === "-") { 
                                this.myResult -= this.allNums[i+1]
                          }else if(this.allNums[i] === "x") {
                                this.myResult = this.myResult * this.allNums[i+1]
                          }else if (this.allNums[i] === "/"){
                            this.myResult =this.myResult / this.allNums[i+1]
                      } 
                  }
                  this.allNums=[];
                  this.setState((state, props)=> {
                     return { result : this.myResult }})
                }
              console.log("result " + this.myResult);
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

export default App;
