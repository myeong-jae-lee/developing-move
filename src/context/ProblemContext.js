import React, { createContext, useReducer, useContext, useRef } from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState
} from '../modules/AsyncActionUtils';
import * as problemsApi from '../api/fe-problems';
import * as similarsApi from '../api/fe-similars';

// 기본 상태
const initialState = {
  problems: initialAsyncState,
  similars: initialAsyncState
};

const problemsHandler = createAsyncHandler('GET_PROBLEMS', 'problems');
const similarsHandler = createAsyncHandler('GET_SIMILAR', 'similars');

// reducer
function problemsReducer(state, action){
  switch(action.type){
    case 'GET_PROBLEMS':
    case 'GET_PROBLEMS_SUCCESS':
    case 'GET_PROBLEMS_ERROR':
      return problemsHandler(state, action);
    case 'GET_SIMILARS':
    case 'GET_SIMILARS_SUCCESS':
    case 'GET_SIMILARS_ERROR':
      return similarsHandler(state, action);
    default: 
      throw new Error(`Unhanded action type: ${action.type}`)
  }
}

// state용 context와 dispatch용 context 분리하여 만들기.
const ProblemsStateContext = createContext(null);
const ProblemsDispatchContext = createContext(null);
const ProblemActiveIdContext = createContext();


export function ProblemsProvider({ children }) {
  const [state, dispatch] = useReducer(problemsReducer, initialState);
  const activeId = useRef(0);
  return (
    <ProblemsStateContext.Provider value={state}>
      <ProblemsDispatchContext.Provider value={dispatch}>
        <ProblemActiveIdContext.Provider value={activeId}>
          {children}
        </ProblemActiveIdContext.Provider>
      </ProblemsDispatchContext.Provider>
    </ProblemsStateContext.Provider>
  );
}

// state 조회용 Custom Hook 생성
export function useProblemsState() {
  const state = useContext(ProblemsStateContext);
  if (!state) {
    throw new Error('Can not find ProblemsProvider');
  }
  return state;
}

// Dispatch 조회용 Custom Hook 생성
export function useProblemsDispatch() {
  const dispatch = useContext(ProblemsDispatchContext);
  if (!dispatch) {
    throw new Error('Can not find ProblemsProvider');
  }
  return dispatch;
}

// active Id 조회용 Custom Hook 생성
export function useActiveProblemId(){
  const dispatch = useContext(ProblemActiveIdContext);
  if(!dispatch){
    throw new Error('Can not find ProblemsProvider');
  }
  return dispatch;
}

export const getProblems = createAsyncDispatcher('GET_PROBLEMS', problemsApi.getProblems);
export const getSimilars = createAsyncDispatcher('GET_SIMILARS', similarsApi.getSimilars);
