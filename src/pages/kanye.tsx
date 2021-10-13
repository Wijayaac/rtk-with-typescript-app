import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getKanyeQuote, selectKanye } from '../features/kanye/kanyeSlice'

const kanye: React.FC = () => {
    const dispatch = useAppDispatch()
    const { data, pending, error } = useAppSelector(selectKanye)

    return (
        <div>
            <h2>generate random Kanye West quote</h2>
            {pending && <p>loading...</p>}
            {data && <p>{data.quote}</p>}
            {error && <p>Oops, somehing when wrong...</p>}
            <button onClick={() => dispatch(getKanyeQuote())}>Generate Kanye Quote</button>
        </div>
    )
}

export default kanye
