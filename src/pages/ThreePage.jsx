import React from 'react';
import Hello from '../components/Hello'

const ThreePage = () => {
  return (
    <Hello name='홍길동' color="red" isSpecial={true}  ></Hello> // true 는 자바스크립트 값이기 때문에 중괄호로 감쌈
  );
};

export default ThreePage;
