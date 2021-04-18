import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ProblemList from './components/ProblemList';
import ProblemTemplate from './components/ProblemTemplate';
import ProblemTitle from './components/ProblemTitle';

import SimilarList from './components/SimilarList';
import SimilarTemplate from './components/SimilarTemlate';
import SimilarTitle from './components/SimilarTitle';
import { ProblemsProvider } from './context/ProblemContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #E0E0E0;

    .content {
      display: inline-flex;
    }
  }
`;

function App() {
  
  const onClick = (id) => {
    console.log(id);
  }

  return (
    <ProblemsProvider className='content'>
      <GlobalStyle />
      <ProblemTemplate>
        <ProblemTitle />
        <ProblemList onClick={onClick}/>
      </ProblemTemplate>
      <SimilarTemplate>
        <SimilarTitle />
        <SimilarList />
      </SimilarTemplate>
    </ProblemsProvider>
  );
}

export default App;
