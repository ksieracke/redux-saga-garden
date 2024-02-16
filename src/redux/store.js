import { createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import { applyMiddleware } from 'redux';


const sagaMiddleware=createSagaMiddleware();

// this startingPlantArray should eventually be removed
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' }
// ];

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return state = action.payload;
    default:
      return state;
  }
};

function* getPlantsSaga(action){
  try{
    const plantsResponse=yield axios.get('/api/plants');
    yield put({type:'ADD_PLANT', payload: plantsResponse.data})
  }catch(err){
    console.log('ERROR:', err);
  }
}

function* postPlantSaga(action){
  try{
    const newPlant=yield axios.post('/api/plants', action.payload);
    yield put({type: 'GET_PLANTS'});
  }
  catch(err){
    console.log('Error:', err);
  }
}

function* deletePlantSaga(action){
  try{
    const removedPlant= yield axios.delete(`/api/plants/${action.payload}`);
    yield put({type:'GET_PLANTS'});
  }
  catch(err){
    console.log(err);
  }
}

function* watcherSaga(){
  yield takeEvery('GET_PLANTS', getPlantsSaga);
  yield takeEvery('NEW_PLANT', postPlantSaga);
  yield takeEvery('DELETE_PLANT', deletePlantSaga);
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(logger, sagaMiddleware)
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

sagaMiddleware.run(watcherSaga);

export default store;
