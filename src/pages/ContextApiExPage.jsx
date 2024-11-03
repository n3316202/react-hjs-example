import React from 'react'

const ContextApiExPage = () => {
    return <GrandParent value="Hello World!" />
}

function GrandParent({ value }) {
    return <Parent value={value} />
}

function Parent({ value }) {
    return <Child value={value} />
}

function Child({ value }) {
    return <GrandChild value={value} />
}

export default ContextApiExPage
