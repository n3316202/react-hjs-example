import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import routes from '../route/Routes'
import { ThemeContext } from '../context/ThemeContext'

const HeaderNav = () => {
    //const data = useContext(ThemeContext)
    //console.log('헤더 데이타', data)

    const { isDark, setIsDark } = useContext(ThemeContext)
    setIsDark(true)

    console.log('헤더 데이타', isDark)

    return (
        <div className="text-center mt-3">
            {routes.map((route, index) => (
                //console.log(route.path)
                <Link key={route.path || index} to={route.path}>
                    {route.title} |{' '}
                </Link>
            ))}
        </div>
    )
}

export default HeaderNav
