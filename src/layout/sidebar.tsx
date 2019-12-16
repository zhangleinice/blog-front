import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;
// @ts-ignore
@withRouter
class Sidebar extends React.Component<any> {
    checkJump = () => {
        this.props.history.push('/list')
    }
    public render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="html5" />
                            mt-ui
                            </span>
                        }
                    >
                        <Menu.Item key="1" onClick={this.checkJump}>Test</Menu.Item>
                        <Menu.Item key="3">Address</Menu.Item>
                        <Menu.Item key="2">BuyVip</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="robot" />
                            rc-form
                            </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="chrome" />antd
                            </span>
                        }
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar