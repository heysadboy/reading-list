import React, { useState } from 'react';
import AuthorField from './AuthorField';
import TypeField from './TypeField';
import Error from './Error';

const MediaForm = ({ dataList, authorsData, setDataList, setAuthors, setAddData }) => {
    const [type, setType] = useState('');
    const [formError, setFormError] = useState(false);

    const checkFormValid = (data) => {
        for (var key in data) {
            if (data[key] == "" || data[key] == null || data[key] == undefined) {
                return false;
            }
        }
        return true;
    }

    const submitForm = (e) => {
        e.preventDefault();
        let mediaData = {};
        let authorData = {};

        mediaData['isbn'] = e.target.isbn.value
        mediaData['title'] = e.target.title.value
        mediaData['authors'] = e.target.author_email.value
        mediaData['type'] = type

        if (type === 'books') {
            mediaData['description'] = e.target.description.value
        }
        else if (type === 'magazines') {
            mediaData['publish_date'] = e.target.publish_date.value
        }

        authorData['email'] = e.target.author_email.value
        authorData['firstName'] = e.target.author_first_name.value
        authorData['lastName'] = e.target.author_last_name.value
        authorData['type'] = 'authors'

        if (checkFormValid(mediaData) && checkFormValid(authorData)) {
            setAddData(false);
            setFormError(false);
            //setDataList(...dataList, mediaData);
            //setAuthors(...authorsData, authorData)
            console.log("hi")
        }
        else {
            setFormError(true);
        }
    }

    return (
        <div className="ui segment">
            {formError && <Error message="Please fill the form details correctly." />}
            <form className="ui form" onSubmit={submitForm}>
                <div className="required grouped fields">
                    <label>Media Type</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input onClick={e => setType(e.target.value)} type="radio" name="media-type" value="books" tabIndex="0" />
                            <label>Book</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input onClick={e => setType(e.target.value)} type="radio" name="media-type" value="magazines" tabIndex="0" />
                            <label>Magazine</label>
                        </div>
                    </div>
                </div>
                <div className="required field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" />
                </div>
                <div className="required field">
                    <label>ISBN</label>
                    <input type="text" name="isbn" placeholder="ISBN" />
                </div>
                <AuthorField />
                <TypeField type={type} />
                <button className="ui teal button" type="submit">Add</button>
            </form>
        </div>
    );
};

export default MediaForm;