import React, { useCallback } from 'react';
import styled from 'styled-components';
import { 
  useActiveProblemId, 
  useProblemsDispatch, 
  useProblemsState 
} from '../context/ProblemContext';


const ProblemHeadBlock = styled.div`
  width: 647px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  background: #FAFAFA;

  .problem-type {
    width: 43px;
    height: 14px;
    margin-left: 38px;
    margin-right: 18px;
    margin-top: 20px;
    margin-bottom: 20px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: #9F9F9F;
  }

  .problem-title {
    width: 340px;
    height: 14px;
    margin-right: 25px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #4C4C4C;
  }
  
`;

const Button = styled.button`
  width: 80px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 3px;
  
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #00ABFF;

  &:hover{
    background: #00ABFF;
    color: #FFFFFF;
    cursor: pointer;
  }
  .active{
    background: #00ABFF;
    color: #FFFFFF;
  }
`;

function ProblemHead({ problem }){
  
  const { id, problemType, unitName } = problem;

  const activeId = useActiveProblemId();
  const dispatch = useProblemsDispatch();

  const onToggle = useCallback( id => {
    activeId.current = id;
  }, [activeId]);
  
  const onRemove = useCallback(id => {
    console.log('this is onRemove');
  }, []);

  return (
    <ProblemHeadBlock>
      <div className='problem-type'>{problemType}</div>
      <div className='problem-title'>{unitName}</div>
      <Button onClick={() => onToggle(id)}>유사문항</Button>
      <Button onClick={() => onRemove(id)}>삭제</Button>
    </ProblemHeadBlock>
  )
}

export default ProblemHead;