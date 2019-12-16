import * as React from 'react';
import { Layout } from 'antd';
import Header from './header';
import  './index.less';
import router from '../router/index';
import { createBrowserHistory } from 'history';
import Sidebar from './sidebar';

const history = createBrowserHistory()

const {  Content, Footer  } = Layout;

const App = () => 
    <Layout>
        <Header/>
        <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sidebar/>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {router(history)}
                </Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mt-ui ©2019 Created by Mt UED</Footer>
    </Layout>


export default App