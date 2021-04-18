import React from 'react';
import styled from 'styled-components';

const SimilarEmptyBlock = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  width: 100%;
  height: 100vh;

  .information{
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    text-align: center;

    color: #9F9F9F;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 36px;

  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 3px;
  
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #00ABFF;
`;

function SimilarEmpty(){
  return (
    <SimilarEmptyBlock>
      <div className='information'>
      <Button>유사문항</Button> 버튼을 누르면 해당 문제의 유사 문항을 볼 수 있습니다.
      </div>
    </SimilarEmptyBlock>
  )
}

export default SimilarEmpty;