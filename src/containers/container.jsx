import React from "react"
import { connect } from "react-redux"
import { Counter } from "../components/counter";
import { increment, decrement } from "./actions";

function CounterContainer({ ...props }) {
    return (<Counter {...props} />)
}

function mapStateToProps({ count: { counter } }) {

    return { counter }

}

function mapDispatchToProps(dispatch) {

    return {

        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);