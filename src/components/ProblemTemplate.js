import React from 'react';
import styled from 'styled-components';

const ProblemTemplateBlock = styled.div`
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  margin-right: 5px;
`;

function ProblemTemplate({children}){
  return (
    <ProblemTemplateBlock>
      {children}
    </ProblemTemplateBlock>
  )
}

export default React.memo(ProblemTemplate);
