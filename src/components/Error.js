import React from 'react';

const Error = ({ type, message = "There was an error. Please try again" }) => {
    if (type === 'data') {
        return (<div className="ui red message">Error in reading data. Please try again.</div>);
    }
    else if (type === 'search') {
        return (<div className="ui yellow message">No results available. Please try again.</div>);
    }
    else {
        return (<div className="ui red message">{message}</div>);
    }
}

export default Error;