import { ReactElement } from "react";
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../state/counter";

export default function Home(): ReactElement {
    const dispatch = useDispatch();

    const data = useSelector((state: any) => state.counter.value)

    const incrementByOne = () => {
        dispatch(increment());
    }

    const decrementByOne = () => {
        dispatch(decrement());
    }

    return (
        <div className='home' >
            <p>{data}</p>
            <button className="dark" onClick={incrementByOne}>Increment</button>
            <button className="dark" onClick={decrementByOne}>Decrement</button>
        </div >
    )
}
