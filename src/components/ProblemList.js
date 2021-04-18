import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProblemItem from './ProblemItem';
import { 
  getProblems, 
  useProblemsState, 
  useProblemsDispatch
} from '../context/ProblemContext';

const ProblemListBlock = styled.div`
  width: 647px;
  height: 100%;
  margin-bottom: 8px;
`;

function ProblemList(){

  const state = useProblemsState();
  const dispatch = useProblemsDispatch();

  useEffect(() => {
    getProblems(dispatch);
  }, [dispatch])

  const { data: problems, loading, error } = state.problems;

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error</div>;
  if(!problems) return null;
  
  return (
    <ProblemListBlock>
      {problems.map((problem, index) => (
        <ProblemItem 
          key={problem.id}
          index={index}
          problem={problem}
        />
      ))}
    </ProblemListBlock>
  )
}

export default ProblemList;