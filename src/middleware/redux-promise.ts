/*
 * @Author: 阿水 
 * @since: 2019-12-09 21:38:01 
 * 异步中间件
 * 截获一个异步action，返回PENDING，SUCCESS，FAILURE三个状态的action
 * FAILURE的action中统一处理错误
 */

import onError from '../exception';

const defaultTypes = [
    'PENDING',
    'SUCCESS',
    'FAILURE'
];
function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
    }
    return false;
}
  
export default () => {
    
    return ({getState}) => next => action => {

        const {type, payload} = action;

        if (!payload || (!isPromise(payload))) {
        // 将非promise的action指派给下一个中间件
            return next(action);
        }
      
        const [PENDING, SUCCESS, FAILURE] =  defaultTypes;
      
        let data = null;
      
        // 根据参数获取新派生的Action
        const getAction = (type, newPayload, isRejected?) => ({
            type: type,
            ...newPayload ? {payload: newPayload} : {},
        });
      
        // Pending的处理
        const handlePending = () => {
            const pendingAction = getAction(`${type}_${PENDING}`, data, false);
        
            next(pendingAction);

        };
      
        // Success的处理
        const handleSuccess = (value = null) => {
            const successAction = getAction(`${type}_${SUCCESS}`, value, false);
            
            next(successAction);

            return 'success';
        };
      
        // Failure的处理
        const handleFailure = (value = null) => {
            const failureAction = getAction(`${type}_${FAILURE}`, value, true);
        
            next(failureAction);

            onError(failureAction)
        };
        
        handlePending();
      
        return payload.then(handleSuccess, handleFailure)
    };
};
  