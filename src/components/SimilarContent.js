import React from 'react';
import styled from 'styled-components';

const SimilarContentBlock = styled.div`
  display: inline-flex;  
  position: relative;
  background: #FFFFFF;
  width: 647px;
`;

const SimilarNumberBlock = styled.div`
  width: 15px;
  height: 35px;
  margin-top: 12px;
  margin-left: 46px;
  margin-right: 37px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #02C7F2;
`;

function SimilarContent(){
  return (
    <>
    <SimilarContentBlock>
      <SimilarNumberBlock>1</SimilarNumberBlock>
      Similar content
    </SimilarContentBlock>
    </>
  )
}

export default SimilarContent;