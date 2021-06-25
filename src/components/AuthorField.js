import React from 'react';

const AuthorField = () => {

    // Need to implement adding multiple author functionality
    const addMoreAuthor = (e) => {
        e.preventDefault();
    }

    return (
        <div className="field">
            <label>Authors</label>
            <div className="four fields">
                <div className="required field">
                    <label>First name</label>
                    <input type="text" name="author_first_name" placeholder="First Name" />
                </div>
                <div className="required field">
                    <label>Last name</label>
                    <input type="text" name="author_last_name" placeholder="Last Name" />
                </div>
                <div className="required field">
                    <label>Email</label>
                    <input type="text" name="author_email" placeholder="Email" />
                </div>
                <div className="field">
                    <label>&ensp;</label>
                    <button className="ui icon grey button" onClick={addMoreAuthor}><i className="add icon"></i></button>
                </div>
            </div>
        </div>
    );
}

export default AuthorField;