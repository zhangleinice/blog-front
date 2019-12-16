/*
 * 全局错误处理
 */
import { message } from 'antd';

export default action => {
    const { msg = '网络异常'    } = action.payload;

    message.error( msg );
}