import React, { Component } from 'react';

import './MainCalculator.css';

const _ = require('lodash');

export default class MainCalculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
        };
        this.handleDisplayAdd = this.handleDisplayAdd.bind(this);
        this.allResetButton = this.allResetButton.bind( this );
        this.backspaceButton = this.backspaceButton.bind(this);
    };
    handleDisplayAdd(newCharacter) {
        let tempArr = this.state.display.split('');
        let dotPresent = _.indexOf(tempArr, '.');
        // tempArr.find('.');
        console.log(dotPresent);
        if (this.state.display === '0') {
            this.setState({ display: newCharacter })
        } else if(newCharacter === '.' && dotPresent !== -1) {
            // Do nothing
        } else {
            this.setState({ display: this.state.display + newCharacter });
        }
    } // End of handleDisplayAdd
    allResetButton() {
        this.setState({ display: '0' });
    } // End of allResetButton method.
    backspaceButton() {
        let tempStore = this.state.display;
        if(tempStore === '0'){
            //Do nothing
        } else {
            // Seperate the numbers array to shave off a number at the end.
            let brokenUp = tempStore.split('');
            let newNumber = []; 
            // Iterate through array and only push everything except last number.
            for(let i=0;i<brokenUp.length-1;i++){
                newNumber.push(brokenUp[i]);
            }
            // If the newNumber contains none, then set the display back to 0. If not then join the array back to a string and set the state of the display to the new number with no backspace.
            if(typeof newNumber[0] === 'undefined'){
                this.setState({ display: '0' });
            } else {
                let combine = newNumber.join('');
                this.setState({ display: combine });
            }
        }    
    }   // End of backspaceButton method.

    render() {
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

                <article className='display'>
                    <p>+</p>
                    <p>{this.state.display}</p>
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
                    <button onClick={() => console.log('Clicked Divide')}>/</button>
                </span>


                <span className='rowFlex'>
                    <button onClick={() => this.handleDisplayAdd('7')}>7</button>
                    <button onClick={() => this.handleDisplayAdd('8')}>8</button>
                    <button onClick={() => this.handleDisplayAdd('9')}>9</button>
                    <button onClick={() => console.log('Clicked Times')}>X</button>
                </span>


                <span className='rowFlex'>
                    <button onClick={() => this.handleDisplayAdd('4')}>4</button>
                    <button onClick={() => this.handleDisplayAdd('5')}>5</button>
                    <button onClick={() => this.handleDisplayAdd('6')}>6</button>
                    <button onClick={() => console.log('Clicked Minus')}>-</button>
                </span>

                <span className='rowFlex'>
                    <button onClick={() => this.handleDisplayAdd('1')}>1</button>
                    <button onClick={() => this.handleDisplayAdd('2')}>2</button>
                    <button onClick={() => this.handleDisplayAdd('3')}>3</button>
                    <button onClick={() => console.log('Clicked Plus')}>+</button>
                </span>

                <span className='rowFlex'>
                    <button onClick={() => console.log('Clicked Plus/Minus')}>+ / -</button>
                    <button onClick={() => this.handleDisplayAdd('0')}>0</button>
                    <button onClick={() => this.handleDisplayAdd('.')}>.</button>
                    <button onClick={() => console.log('Clicked Equal')}>=</button>
                </span>
            </div>
        )
    }
}