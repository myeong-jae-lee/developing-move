import React from 'react';
import styled from 'styled-components';

const ProblemContentBlock = styled.div`
  display: inline-flex;  
  position: relative;
  background: #FFFFFF;
  width: 647px;

  .image {
    margin-top: 18px;
    margin-bottom: 23px;
  }
`;

const ProblemNumberBlock = styled.div`
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

function ProblemContent({problem, index}){
  const { problemURL } = problem;
  return (
    <>
    <ProblemContentBlock>
      <ProblemNumberBlock>{index+1}</ProblemNumberBlock>
      <img src={problemURL} alt='problem' className='image'/>
    </ProblemContentBlock>
    </>
  )
}

export default ProblemContent;