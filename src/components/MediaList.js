import React, { useEffect, useState } from 'react';
import MediaItem from './MediaItem';
import Error from './Error';

const MediaList = ({ dataList, authorsData, searchTerm }) => {
    const [isEmpty, setIsEmpty] = useState(null);

    let renderedList = dataList.map((data) => {
        const authorIDs = data.authors.split(',')
        const authorList = authorIDs.map((author) => {
            return authorsData.find(x => x.email === author);
        })

        if (authorIDs.includes(searchTerm) || searchTerm === data.isbn) {
            return (<MediaItem key={data.isbn} media={data} authors={authorList} />);
        }
        else if (searchTerm === '') {
            return (<MediaItem key={data.isbn} media={data} authors={authorList} />)
        }
    })

    useEffect(() => {
        renderedList = renderedList.filter(ele => ele);
        if (renderedList.length > 0) {
            setIsEmpty(false);
        }
        else if (isEmpty != null) {
            setIsEmpty(true);
        }
    }, [renderedList]);

    if (isEmpty) {
        return (<Error type="search" />);
    }
    else {
        return (<div className="ui relaxed divided list">{renderedList}</div>);
    }

};

export default MediaList;