import React from 'react';
import styled from 'styled-components';

const SimilarHeadBlock = styled.div`
  width: 647px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  background: #FAFAFA;

  .similar-type {
    width: 43px;
    height: 14px;
    margin-left: 38px;
    margin-right: 18px;
    margin-top: 20px;
    margin-bottom: 20px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #9F9F9F;
  }

  .similar-title {
    width: 340px;
    height: 14px;
    margin-right: 25px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #4C4C4C;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

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
  
  &:hover{
    background: #00ABFF;
    color: #FFFFFF;
    cursor: pointer;
  }
  &:active{
    background: #00ABFF;
    color: #FFFFFF;
  }
`;

function SimilarHead(){
  
  const onCreate = () => {
    console.log('this is on create');
  }
  
  const onReplace = () => {
    console.log('this is on replace');
  }
  return (
    <SimilarHeadBlock>
      <div className='similar-type'>객관식</div>
      <div className='similar-title'>연립일차방정식의 활용</div>
      <Button onClick={onCreate}>추가</Button>
      <Button onClick={onReplace}>교체</Button>
    </SimilarHeadBlock>
  )
}

export default SimilarHead;