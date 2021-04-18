import React from 'react';
import styled from 'styled-components';

const ProblemTitleBlock = styled.div`
  width: 647px;
  height: 48px;
  background: #FFFFFF;
  margin-bottom: 8px;

  display: flex;
  align-items: center;

  .title {
    margin-left: 25px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    color: #4C4C4C;
  }
`;

function ProblemTitle(){

  return (
    <ProblemTitleBlock>
      <div className='title'>학습지 상세 편집</div>
    </ProblemTitleBlock>
  )
}

export default React.memo(ProblemTitle);
