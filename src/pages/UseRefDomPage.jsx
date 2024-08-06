import React from 'react';
import {useRef,useState} from 'react';
//첫번째 사용하는 경우
//useRef 변화는 감지해야 되지만, 렌더링은 하고 싶지 않을때.
const UseRefDomPage = () => {
  const modalRef = useRef(null);

  function handleClick() {
    modalRef.current.classList.toggle('active');
  }

  return (
    <div>
      <button onClick={handleClick}>Toggle Modal</button>
      <div className="modal" ref={modalRef}>
        <p>Modal content</p>
      </div>
    </div>
  );
};



export default UseRefDomPage;
