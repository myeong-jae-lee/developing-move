import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useActiveProblemId } from '../context/ProblemContext';
import SimilarEmpty from './SimilarEmpty';
// import SimilarItem from './SimilarItem';

const SimilarListBlock = styled.div`
  width: 647px;
  height: 100%;
  margin-bottom: 8px;
`;

function SimilarList(){

  return (
    <SimilarListBlock>
      <SimilarEmpty />
    </SimilarListBlock>
  )
}

export default React.memo(SimilarList);