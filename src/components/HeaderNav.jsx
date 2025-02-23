import { Link } from 'react-router-dom'
import routes from '../route/routes.js'

const HeaderNav = () => {
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
