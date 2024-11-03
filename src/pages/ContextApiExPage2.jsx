import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext('defaultValue')

function ContextApiExPage2() {
    const [value, setValue] = useState(true)

    return (
        // Provider를 통해서 value를 설정하여 MyContext의 값을 설정할 수 있다.
        <MyContext.Provider value={value ? 'Good' : 'Bad'}>
            <GrandParent />
            <button onClick={() => setValue(!value)}>Click Me!</button>
        </MyContext.Provider>
    )
}

function GrandParent() {
    return <Parent />
}

function Parent() {
    return <Child />
}

function Child() {
    const test = useContext(MyContext)
    return <div>안녕하세요: {test}</div>
}

export default ContextApiExPage2
