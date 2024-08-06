import React, { useState } from 'react';
//https://react.vlpt.us/basic/07-useState.html

function Grade() {

  const person ={
    name : '홍길동',
    eng : 90,
    math : 80,
    kor : 70,    
  }
  
  const [grade, setGrade] = useState(person);

  const onTotal= (event) => {

    setNumber(number + 1);
  }



  return (
    <div>
      <input>이름 : {grade.name}</input>
      <input>국어 : {grade.kor}</input>
      <input>영어 : {grade.eng}</input>
      <input>수학 : {grade.math}</input>

      <button onClick={onTotal}>성적</button><br></br>
      
    </div>
  );
}

export default Grade;