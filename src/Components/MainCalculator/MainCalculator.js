import React, { Component } from 'react';

import './MainCalculator.css';

export default class MainCalculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '',
        };
        this.handleDisplayAdd = this.handleDisplayAdd.bind( this );
    };
    handleDisplayAdd(newCharacter){
        this.setState({ display: this.state.display + newCharacter });
    }

    render() {
        return (
            <div className='mainCalcArea'>
                Main Calcluator
                <article className='display'>
                    <p>{this.state.display}</p>
                </article>
                <br />
                <button onClick={()=>this.handleDisplayAdd('7')}>7</button>
                <button onClick={()=>this.handleDisplayAdd('8')}>8</button>
                <button onClick={()=>this.handleDisplayAdd('9')}>9</button>
                <br />
                <button onClick={()=>this.handleDisplayAdd('4')}>4</button>
                <button onClick={()=>this.handleDisplayAdd('5')}>5</button>
                <button onClick={()=>this.handleDisplayAdd('6')}>6</button>
                <br />
                <button onClick={()=>this.handleDisplayAdd('1')}>1</button>
                <button onClick={()=>this.handleDisplayAdd('2')}>2</button>
                <button onClick={()=>this.handleDisplayAdd('3')}>3</button>
            </div>
        )
    }
}