import React from 'react';
import styled from 'styled-components';

const SimilarTitleBlock = styled.div`
  width: 647px;
  height: 48px;
  background: #FFFFFF;
  margin-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  .title {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    
    color: #4C4C4C;
  }
`;

function SimilarTitle(){

  return (
    <SimilarTitleBlock>
      <div className='title'>문항 교체/추가</div>
    </SimilarTitleBlock>
  )
}

export default React.memo(SimilarTitle);
