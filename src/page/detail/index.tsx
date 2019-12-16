import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/cnode/action';
import * as MarkDown from 'react-markdown';

// @ts-ignore
@connect(
    // ({operation, getTopics}) => ({
    //     operation, 
    //     topics: getTopics.toJS()
    // }),
    state => {
        const {operation, getTopics} = state as any;
        return  {
            operation,
            topics: getTopics.toJS()
        };
    },
    dispatch => ({ 
        actions: bindActionCreators(actions as any, dispatch) 
    })
)
// @ts-ignore
@withRouter
class Detail extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { 
            detail: {}
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.actions.getDetail(id);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { operation, topics } = nextProps;
        switch(operation.type) {
            case 'GET_DETAIL_SUCCESS':
                this.setState({
                    detail: topics.detail.data
                });
                break;
            default:
                break;
        }
    }
    render() {
        const { detail } = this.state;
        return (
            <div>
                test
                <h2>{detail.title}</h2>
                <MarkDown source={detail.content} escapeHtml={false}/>
            </div>
        );
    }
}

export default Detail;