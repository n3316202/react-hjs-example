import React, { useEffect } from 'react'
import { useState } from 'react'

//https://velog.io/@sucream/%EA%B7%B8%EB%9E%98%EC%84%9C-useEffect%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%93%B0%EB%8A%94%EA%B1%B4%EB%8D%B0%EC%9A%94

const UseEffect1 = () => {
    const [count, setCounter] = useState(0)

    //useEffect(() => {
    //    console.log(`useEffect: ${Date()}`)
    //})

    useEffect(() => {
        console.log(`useEffect: ${Date()}`)
    }, [])

    const countHandler = (e) => {
        setCounter((s) => s + 1)
    }

    return (
        <div className="App">
            <h1 id="hi">{count}</h1>
            <button onClick={countHandler}>카운터 증가</button>
        </div>
    )
}

// 정리하면 아래와 같다.

// useEffect(() => {
//   // 매 렌더링마다 실행
// });

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 실행
// }, []);

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 이후 실행
//   // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
// }, [a, b]);

const UseEffect2 = () => {
    const [firstCount, setFirstCounter] = useState(0)
    const [secondCount, setSecondCounter] = useState(0)

    useEffect(() => {
        console.log(`useEffect: ${Date()}`)
    }, [firstCount, secondCount])

    const firstCountHandler = (e) => {
        setFirstCounter((s) => s + 1)
    }

    const secondCountHandler = (e) => {
        setSecondCounter((s) => s + 1)
    }

    return (
        <div className="App">
            <h1>{firstCount}</h1>
            <button onClick={firstCountHandler}>카운터 증가</button>
            <h1 id="hi">{secondCount}</h1>
            <button onClick={secondCountHandler}>카운터 증가</button>
        </div>
    )
}

export { UseEffect1, UseEffect2 }
