import React from "react";
import { increment, decrement } from "../containers/actions";

export function Counter({ counter, increment, decrement, ...props }) {

    return (<>

        <h1>Hello Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>


    </>)


}