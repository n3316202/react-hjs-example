import React, { useState } from 'react';
//https://react.vlpt.us/basic/07-useState.html

function Grade() {

  const [inputs, setInputs] = useState({
    name: "",
    kor: 0,
    eng: 0,
    math: 0,
  });
  
  const {name, kor , eng , math } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
 
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      kor: 0,
      eng: 0,
      math: 0,
    });
  };

  return (
    <div>
      이름 <input name="name" placeholder="이름"  onChange={onChange} value={name}/><br />
      국어 <input name="kor" placeholder="국어"  onChange={onChange} value={kor}/><br />
      수학 <input name="eng" placeholder="영어"  onChange={onChange} value={eng}/><br />
      영어 <input name="math" placeholder="수학"  onChange={onChange} value={math} /><br />
      <div>
        <div>총점:{Number(kor) + Number(eng) + Number(math)} </div>
        <div>평균:{(Number(kor) + Number(eng) + Number(math)) / 3.0} </div>
      </div>
      
    </div>
  );
}

export default Grade;