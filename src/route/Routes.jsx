import React from 'react'
import BoardPage from '../pages/BoardPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from '../pages/PropsPage'
import ThreePage from '../pages/ThreePage'
import UseStatePage from '../pages/UseStatePage'
import GradePage from '../pages/GradePage'
import UseRefExamplePage from '../pages/UseRefExamplePage'
import UseRefDomPage from '../pages/UseRefDomPage'
import ContextApiExPage from '../pages/ContextApiExPage'
import ContextApiExPage2 from '../pages/ContextApiExPage2'

//React Routes, Route 사용시 배열로 관리하기
//https://innovatorwhy.tistory.com/12
const routes = [
    {
        path: '/',
        element: <HomePage />,
        title: 'Home',
    },
    {
        path: '/board',
        element: <BoardPage />,
        title: 'Board',
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        title: 'Profile',
    },
    {
        path: '/props',
        element: <PropsPage />,
        title: '프롭스',
    },
    {
        path: '/thress',
        element: <ThreePage />,
        title: '삼항연산자',
    },
    {
        path: '/usestate',
        element: <UseStatePage />,
        title: 'useState연습',
    },
    {
        path: '/grade',
        element: <GradePage />,
        title: '성적표',
    },
    {
        path: '/useref',
        element: <UseRefExamplePage />,
        title: 'useRef예제',
    },
    {
        path: '/useref2',
        element: <UseRefDomPage />,
        title: 'useRef_Dom_예제',
    },
    {
        path: '/contextapi',
        element: <ContextApiExPage />,
        title: '컨텍스트API 안쓴 예제',
    },
    {
        path: '/contextapi2',
        element: <ContextApiExPage2 />,
        title: '컨텍스트API 쓴 예제',
    },
]

export default routes
