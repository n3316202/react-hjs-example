import React from 'react';
import {useRef,useState} from 'react';
//첫번째 사용하는 경우
//useRef 변화는 감지해야 되지만, 렌더링은 하고 싶지 않을때.
const UseRefDomPage = () => {
  const nameRef = useRef();
  
  const handleClick = () => {
    if(nameRef.current.value.length < 1){
      nameRef.current.focus()
    }
  };

  return (
    <div style={{padding : 20}}>
      <input ref={nameRef} placeholder="이름을 입력하세요"/>
      <button onClick={handleClick}>입력</button>
    </div>
  );
};



export default UseRefDomPage;
