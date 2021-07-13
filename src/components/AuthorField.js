import React, { useState } from 'react';

const AuthorField = () => {

    const [authFormData, setAuthorFormData] = useState(
        [
            {
                author_first_name: "",
                author_last_name: "",
                author_email: ""
            }
        ]
    );

    const addMoreAuthor = (e) => {
        e.preventDefault();
        setAuthorFormData([...authFormData,
        {
            author_first_name: "",
            author_last_name: "",
            author_email: ""
        }])
    }

    const removeAuthor = (e, i) => {
        e.preventDefault();
        const list = [...authFormData];
        list.splice(i, 1);
        setAuthorFormData(list);
    }

    const onAuthorFieldChange = (e, i) => {
        const { name, value } = e.target;
        const list = [...authFormData];
        list[i][name] = value;
        setAuthorFormData(list);
    }

    const authorFieldList = authFormData.map((author, i) => {
        return (
            <div className="four fields">
                <div className="required field">
                    <label>First name</label>
                    <input type="text" name="author_first_name" value={author.first_name} onChange={e => onAuthorFieldChange(e, i)} placeholder="First Name" />
                </div>
                <div className="required field">
                    <label>Last name</label>
                    <input type="text" name="author_last_name" value={author.last_name} onChange={e => onAuthorFieldChange(e, i)} placeholder="Last Name" />
                </div>
                <div className="required field">
                    <label>Email</label>
                    <input type="text" name="author_email" value={author.email} onChange={e => onAuthorFieldChange(e, i)} placeholder="Email" />
                </div>
                <div className="field">
                    <label>&ensp;</label>
                    {
                        i === authFormData.length - 1
                            ?
                            <div>
                                {i != 0 ? <button className="ui icon grey button" onClick={e => removeAuthor(e, i)}><i className="minus icon"></i></button> : null}
                                <button className="ui icon grey button" onClick={addMoreAuthor}><i className="add icon"></i></button>
                            </div>
                            :
                            <button className="ui icon grey button" onClick={e => removeAuthor(e, i)}><i className="minus icon"></i></button>
                    }
                </div>
            </div>
        )
    });

    return (
        <div className="field">
            <label>Authors</label>
            {authorFieldList}
        </div>
    );
}

export default AuthorField;