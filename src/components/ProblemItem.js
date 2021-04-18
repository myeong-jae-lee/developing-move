import React from 'react';
import styled from 'styled-components';
import ProblemContent from './ProblemContent';
import ProblemHead from './ProblemHead';

const ProblemItemBlock = styled.div`
  margin-bottom: 8px;
`;

// map()
function ProblemItem({problem, index}){
  return (
    <ProblemItemBlock>
      <ProblemHead problem={problem} />
      <ProblemContent problem={problem} index={index} />
    </ProblemItemBlock>
  )
}

export default ProblemItem;