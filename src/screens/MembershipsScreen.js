import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import getMemberships from "../actions/getMemberships";
import {FAILED, START} from "../common/constants";
import _ from "lodash";

class MembershipsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memberships: []
        }
    }

    componentWillReceiveProps(nextProps) {
        // Make sure token has not expired
        if (nextProps.memberships.status === FAILED && nextProps.memberships.statusCode === 401) {
            // Token has expired but not by timeout so move to login screen
            this.props.router.replace('/auth');
            return;
        }
    }

    render() {
        if (this.props.memberships.status === START) {
            return (
                <p>Loading memberships</p>
            )
        }

        if (!_.isEmpty(this.props.memberships.results)) {
            return (
                <p>{this.props.memberships.results[0].url}</p>
            )
        }
        else {
            return (
                <p>No membership data available</p>
            )
        }
    }

    componentDidMount() {
        this.props.dispatch(getMemberships(this.props.auth.access_token));
    }
}

// Redux wrapper
MembershipsScreen = connect((store) => {
    return {
        ...store
    }
})(MembershipsScreen);

// react-router wrapper
MembershipsScreen = withRouter(MembershipsScreen);

export default MembershipsScreen ;