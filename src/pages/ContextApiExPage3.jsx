import React, { createContext, useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ContextApiExPage3() {
    const data = useContext(ThemeContext)
    console.log('데이타', data)

    return <h1>안녕하세요</h1>
}

export default ContextApiExPage3
