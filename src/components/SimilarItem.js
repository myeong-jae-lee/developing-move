import React from 'react';
import styled from 'styled-components';
import SimilarContent from './SimilarContent';
import SimilarHead from './SimilarHead';

const SimilarItemBlock = styled.div`
  margin-bottom: 8px;
`;

function SimilarItem(){
  return (
    <SimilarItemBlock>
      <SimilarHead />
      <SimilarContent />
    </SimilarItemBlock>
  )
}

export default SimilarItem;