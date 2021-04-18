import React from 'react';
import styled from 'styled-components';

const SimilarTemplateBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%
`;

function SimilarTemplate({children}){

  return (
    <SimilarTemplateBlock>
      {children}
    </SimilarTemplateBlock>
  )
}

export default React.memo(SimilarTemplate);
