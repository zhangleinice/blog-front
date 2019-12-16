import {
    GET_TOPICS_SUCCESS,
    GET_DETAIL_SUCCESS
} from './action';
import {
    fromJS
} from 'immutable';
import {
    createReducer
} from 'redux-immutablejs';
import {
    getObjReducer
} from '../../util/reducer';


// 结合immutablejs
const initailState = fromJS( {
    topics: {},
    detail: {}
} )

const getTopics = createReducer( initailState, {
    [ GET_TOPICS_SUCCESS ]: ( state, {
        payload
    } ) => {
        return state.set( 'topics', getObjReducer( state, payload ) )
    },
    [ GET_DETAIL_SUCCESS ]: ( state, {
        payload
    } ) => {
        return state.set( 'detail', getObjReducer( state, payload ) )
    }
} )

export default getTopics;