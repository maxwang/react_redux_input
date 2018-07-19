import React from 'react';
import { connect } from 'react-redux';

class InputMirror extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <input value={this.props.inputValue} onChange={this.props.inputChanged} />
                <p>{this.props.inputValue}</p>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    console.log(state);
    return {
        inputValue: state.inputReducer.inputValue
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        inputChanged: (evt) => {
            console.log('changed');
            console.log(evt);
            const action = { type: 'INPUT_CHANGE', text: evt.target.value };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);