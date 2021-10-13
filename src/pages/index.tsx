import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount, selectCount } from '../features/counter/counterSlice'


const IndexPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)

    const [incrementAmount, setIncrementAmount] = useState<number>(0)
    return (
        <>
            <h1>Welcome to the greates app in the world!</h1>
            <h2>The counter is {count} </h2>

            <div>
                <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))} >Increment By Amount</button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())} >Decrement by 1</button>
                <button onClick={() => dispatch(increment())} >Increment by 1</button>
            </div>
        </>
    )
}

export default IndexPage
