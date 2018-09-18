import React from 'react';
import { connect } from 'react-redux';

// import {} from '../../ducks/reducer';

import './ResultsSection.css';

class ResultsSection extends React.Component {


    render() {
        let mapSolutions = this.props.solutionsArray.map( (element, index) => { return (<p key={index}>{element}</p>)})

        return (
            <div className='resultsMain'>
                <h1>Saved Results</h1>
                <section className='resultsDialogue'>
                    {mapSolutions}
                    
                    {/* <p>2 + 2 = 4</p>
                    <p>4 * 5 = 20</p>
                    <p>10 + 10 = 20</p>
                    <p>2 + 2 = 4</p> */}

                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentOperator: state.currentOperator,
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber,
        solution: state.solution,
        solutionsArray: state.solutionsArray
    }
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(ResultsSection);