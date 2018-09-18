import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNumberDisplayScreen, setOperatorDisplayScreen, setCurrentOperator, setFirstNumber, setSecondNumber, setSolution, addToSolutionsArray, getSavedSolutions } from '../../ducks/reducer';

import './MainCalculator.css';
const _ = require('lodash');

class MainCalculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
        };
        this.handleDisplayAdd = this.handleDisplayAdd.bind(this);
        this.allResetButton = this.allResetButton.bind(this);
        this.backspaceButton = this.backspaceButton.bind(this);
        this.addButton = this.addButton.bind(this);
        this.subtractButton = this.subtractButton.bind(this);
        this.divideButton = this.divideButton.bind(this);
        this.timesButton = this.timesButton.bind(this);
        this.equalButton = this.equalButton.bind(this);
    };

    handleDisplayAdd(newCharacter) {
        let tempArr = this.props.numberDisplayScreen.split('');
        let dotPresent = _.indexOf(tempArr, '.');
        // tempArr.find('.');
        console.log(dotPresent);
        if (this.props.numberDisplayScreen === "0") {
            // this.setState({ display: newCharacter });
            this.props.setNumberDisplayScreen(newCharacter);
        } else if (newCharacter === '.' && dotPresent !== -1) {
            // Do nothing
        } 
        // else if (this.props.currentOperator !== '') {
            // this.props.setNumberDisplayScreen(newCharacter);
        // } 
        else {
            // this.setState({ display: this.state.display + newCharacter });
            this.props.setNumberDisplayScreen(this.props.numberDisplayScreen + newCharacter );
        }
    } // End of handleDisplayAdd
    
    allResetButton() {
        // this.setState({ display: '0' });
        this.props.setNumberDisplayScreen('0');
        this.props.setOperatorDisplayScreen('');
        this.props.setCurrentOperator('');
    } // End of allResetButton method.
    backspaceButton() {
        // let tempStore = this.state.display;
        let tempStore = this.props.numberDisplayScreen;
        if (tempStore === '0') {
            //Do nothing
        } else {
            // Seperate the numbers array to shave off a number at the end.
            let brokenUp = tempStore.split('');
            let newNumber = [];
            // Iterate through array and only push everything except last number.
            for (let i = 0; i < brokenUp.length - 1; i++) {
                newNumber.push(brokenUp[i]);
            }
            // If the newNumber contains none, then set the display back to 0. If not then join the array back to a string and set the state of the display to the new number with no backspace.
            if (typeof newNumber[0] === 'undefined') {
                // this.setState({ display: '0' });
                this.props.setNumberDisplayScreen('0');
            } else {
                let combine = newNumber.join('');
                // this.setState({ display: combine });
                this.props.setNumberDisplayScreen( combine );
            }
        }
    }   // End of backspaceButton method.

    
    
    
    
    addButton() {
        this.props.setOperatorDisplayScreen('+');
        this.props.setCurrentOperator('+');
        let firstNumberTempStore = Number(this.props.numberDisplayScreen);
        this.props.setFirstNumber(firstNumberTempStore);
        this.props.setNumberDisplayScreen("0");
    }
    subtractButton() {
        this.props.setOperatorDisplayScreen('-');
        this.props.setCurrentOperator('-');
        let firstNumberTempStore = Number(this.props.numberDisplayScreen);
        this.props.setFirstNumber(firstNumberTempStore);
        this.props.setNumberDisplayScreen("0");
    }
    divideButton() {
        this.props.setOperatorDisplayScreen('/');
        this.props.setCurrentOperator('/');
        let firstNumberTempStore = Number(this.props.numberDisplayScreen);
        this.props.setFirstNumber(firstNumberTempStore);
        this.props.setNumberDisplayScreen("0");
    }
    timesButton() {
        this.props.setOperatorDisplayScreen('X');
        this.props.setCurrentOperator('X');
        let firstNumberTempStore = Number(this.props.numberDisplayScreen);
        this.props.setFirstNumber(firstNumberTempStore);
        this.props.setNumberDisplayScreen("0");
    }

    equalButton() {
        let secondNumberTemp = Number(this.props.numberDisplayScreen);
        this.props.setSecondNumber(secondNumberTemp);
        let solutionTemp = '';
        if (this.props.currentOperator === '+'){
            solutionTemp = this.props.firstNumber + secondNumberTemp;
        } else if (this.props.currentOperator === '-'){
            solutionTemp = this.props.firstNumber - secondNumberTemp;
        } else if (this.props.currentOperator === 'X') {
            solutionTemp = this.props.firstNumber * secondNumberTemp;
        } else if (this.props.currentOperator === '/') {
            solutionTemp = this.props.firstNumber / secondNumberTemp;
        }


        this.props.setSolution(solutionTemp);
    }

    render() {
        let equalShow = this.props.solution === "" ? '' : '=';
        let keepSolutionButton = this.props.solution === '' ? '' : <button className='' onClick={()=> console.log('Keep It')} >Keep</button>
        let deleteSolutionButton = this.props.solution === '' ? '' : 
        <button className='' onClick={()=> console.log('Get rid of it')} >Ignore</button>
        return (
            <div className='mainCalcArea'>
                <div id='rowJustify'>
                    <h1 className='title'>Calcy</h1>
                    <div className='topBox'>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                        <div className='barLine' ></div>
                    </div>
                </div>

                <article className='display' 
                // style={{ height: '100px'}}
                >
                    <p>{this.props.firstNumber}</p>
                    <p>{this.props.currentOperator}</p>
                    <p>{this.props.secondNumber}</p>
                    <p>{equalShow}</p>
                    <p>{this.props.solution}</p>
                    <div>
                    {keepSolutionButton}
                    {deleteSolutionButton}
                    </div>
                </article>

                <article className='display'>
                    <p>{this.props.operatorDisplayScreen}</p>
                    <p>{this.props.numberDisplayScreen}</p>
                </article>


                <span className='rowFlex'>
                    <button onClick={() => console.log('Clicked Remainder')}>%</button>
                    <button onClick={() => console.log('Clicked Square Root')}>SqRT</button>
                    <button onClick={() => console.log('Clicked Squared')}>x^2</button>
                    <button onClick={() => console.log('Clicked Fraction')}>1/X</button>
                </span>


                <span className='rowFlex'>
                    <button onClick={() => this.allResetButton()}>CE</button>
                    <button onClick={() => this.allResetButton()}>C</button>
                    <button id='buttonFormat' onClick={this.backspaceButton}>Backspace</button>
                    <button onClick={() => this.divideButton()}>/</button>
                </span>


                <span className='rowFlex'>
                    <button onClick={() => this.handleDisplayAdd('7')}>7</button>
                    <button onClick={() => this.handleDisplayAdd('8')}>8</button>
                    <button onClick={() => this.handleDisplayAdd('9')}>9</button>
                    <button onClick={() => this.timesButton()}>X</button>
                </span>


                <span className='rowFlex'>
                    <button onClick={() => this.handleDisplayAdd('4')}>4</button>
                    <button onClick={() => this.handleDisplayAdd('5')}>5</button>
                    <button onClick={() => this.handleDisplayAdd('6')}>6</button>
                    <button onClick={() => this.subtractButton()}>-</button>
                </span>

                <span className='rowFlex'>
                    <button onClick={() => this.handleDisplayAdd('1')}>1</button>
                    <button onClick={() => this.handleDisplayAdd('2')}>2</button>
                    <button onClick={() => this.handleDisplayAdd('3')}>3</button>
                    <button onClick={() => this.addButton()}>+</button>
                </span>

                <span className='rowFlex'>
                    <button onClick={() => console.log('Clicked Plus/Minus')}>+ / -</button>
                    <button onClick={() => this.handleDisplayAdd('0')}>0</button>
                    <button onClick={() => this.handleDisplayAdd('.')}>.</button>
                    <button onClick={() => this.equalButton()}>=</button>
                </span>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        numberDisplayScreen: state.numberDisplayScreen,
        operatorDisplayScreen: state.operatorDisplayScreen,
        currentOperator: state.currentOperator,
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber,
        solution: state.solution,
        solutionsArray: state.solutionsArray
    }
};
const mapDispatchToProps = {
    setNumberDisplayScreen,
    setOperatorDisplayScreen,
    setCurrentOperator,
    setFirstNumber,
    setSecondNumber,
    setSolution,
    addToSolutionsArray,
    getSavedSolutions
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCalculator);