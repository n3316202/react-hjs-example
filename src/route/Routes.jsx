import React from 'react';
import BoardPage from '../pages/BoardPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import PropsPage from '../pages/PropsPage';
import ThreePage from '../pages/ThreePage';
import UseStatePage from '../pages/UseStatePage';
import GradePage from '../pages/GradePage';

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
  },
  {
    path: '/usestate',
    element: <UseStatePage />,
    title:'useState연습'
  },
  {
    path: '/grade',
    element: <GradePage />,
    title:'성적표'
  }
];

export default routes
