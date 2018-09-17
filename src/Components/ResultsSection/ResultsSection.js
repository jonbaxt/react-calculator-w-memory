import React from 'react';
import { connect } from 'react-redux';

// import {} from '../../ducks/reducer';

import './ResultsSection.css';

class ResultsSection extends React.Component {

    render() {
        return (
            <div className='resultsMain'>
                <h1>Saved Results</h1>
                <section className='resultsDialogue'>

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