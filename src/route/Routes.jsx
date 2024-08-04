import React from 'react';
import BoardPage from '../pages/BoardPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import PropsPage from '../pages/PropsPage';
import ThreePage from '../pages/ThreePage';

//React Routes, Route 사용시 배열로 관리하기
//https://innovatorwhy.tistory.com/12
const routes = [
  {
      path: '/',
      element: <HomePage />,
      title:'Home'

  },
  {
      path: '/board',
      element: <BoardPage />,
      title:'Board'
  },
  {
      path: '/profile',
      element: <ProfilePage />,
      title:'Profile'
  },
  {
    path: '/props',
    element: <PropsPage />,
    title:'프롭스'
  },
  {
    path: '/thress',
    element: <ThreePage />,
    title:'삼항연산자'
  }
];

export default routes