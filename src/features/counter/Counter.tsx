import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { decrement, increment, incrementByAmount, decrementByAmount } from "./counterSlice"
import "./Counter.css"

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(4))}
          className="counter-number"
        >
          Increment by 4
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment by 1
        </button>
        <span className="counter-number">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement by 1
        </button>
        <button
          aria-label="Decrement by amount"
          onClick={() => dispatch(decrementByAmount(4))}
          className="counter-number"
        >
          Decrement by 4
        </button>
      </div>
    </div>
  )
}