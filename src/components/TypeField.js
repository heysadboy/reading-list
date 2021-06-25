import React from 'react';

const TypeField = ({ type }) => {
    if (type === 'books') {
        return (
            <div className="required field">
                <label>Description</label>
                <input type="text" name="description" placeholder="Description" />
            </div>
        );
    }
    else if (type === 'magazines') {
        return (
            <div className="required field">
                <label>Publish Date</label>
                <input type="text" name="publish_date" placeholder="DD.MM.YYYY" />
            </div>
        );
    }
    else {
        return null;
    }
}

export default TypeField;