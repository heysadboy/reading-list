import React, { useState } from 'react';

const MediaItem = ({ media, authors }) => {

    const [desActive, setDesActive] = useState('');
    const [authorActive, setAuthorActive] = useState('');

    const authorRenderedList = authors.map((author) => {
        return (
            <div key={author.email} className="list">
                <div className="item">
                    <i className="user icon"></i>
                    {author.firstName} {author.lastName}
                </div>
                <div className="item">
                    <i className="envelope icon"></i>
                    {author.email}
                </div>
            </div>
        );
    })

    const onDesClick = () => {
        if (desActive === '') {
            setDesActive('active');
        }
        else {
            setDesActive('');
        }
    }

    const onAuthClick = () => {
        if (authorActive === '') {
            setAuthorActive('active');
        }
        else {
            setAuthorActive('');
        }
    }

    if (media.type === 'books') {
        return (
            <div className="item">
                <i className="book icon"></i>
                <div className="content">
                    <div className="header">{media.title}</div>
                    <div className="description">
                        ISBN: {media.isbn}
                    </div>
                    <div className="ui accordion">
                        <div onClick={onDesClick} className={`${desActive} title`}>
                            <i className="dropdown icon"></i>
                            Description
                        </div>
                        <div className={`${desActive} content`}>
                            <p>{media.description}</p>
                        </div>
                    </div>
                    <div className="ui accordion">
                        <div onClick={onAuthClick} className={`${authorActive} title`}>
                            <i className="dropdown icon"></i>
                            Author
                        </div>
                        <div className={`${authorActive} content`}>
                            {authorRenderedList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    else if (media.type === 'magazines') {
        return (
            <div className="item">
                <i className="book icon"></i>
                <div className="content">
                    <div className="header">{media.title}</div>
                    <div className="description">
                        ISBN: {media.isbn}
                    </div>
                    <div className="description">
                        Published at: {media.publishedAt}
                    </div>
                    <div className="ui accordion">
                        <div onClick={onAuthClick} className={`${authorActive} title`}>
                            <i className="dropdown icon"></i>
                            Author
                        </div>
                        <div className={`${authorActive} content`}>
                            {authorRenderedList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MediaItem;