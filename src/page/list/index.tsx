import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/cnode/action';
import { List } from 'antd';

interface IState {
    topics: Array<any>
}
// @ts-ignore
@connect(
    // ({operation, getTopics}) => ({
    //     operation,
    //     topics: getTopics.toJS()
    // }),
    state => {
        const {operation, getTopics} = state as any
        return  {
            operation,
            topics: getTopics.toJS()
        }
    },
    dispatch => ({ 
        actions: bindActionCreators(actions as any, dispatch) 
    })
)
// @ts-ignore
@withRouter
class Home extends React.Component<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
        }
    }
    componentDidMount() {
        this.props.actions.getTopics();
    }
    componentWillReceiveProps(nextProps) {
        const {topics ,  operation} = nextProps;
        switch (operation.type) {
            case 'GET_TOPICS_SUCCESS':
                this.setState({
                    topics: topics.topics.data,
                });
                break;
            default:
                break;
        }
    }
    toDetail = id => {
        this.props.history.push(`/detail/${id}`)
    }
    render() {
        const loading = this.props.operation.loading['GET_TOPICS']
        return (
            <div>
                <h2>list</h2>
                <List
                    bordered
                    dataSource={this.state.topics}
                    renderItem={item => (<List.Item onClick={() => this.toDetail(item.id)}>{item.title}</List.Item>)}
                    loading={loading}
                />
            </div>
        );
    }
}

export default Home;