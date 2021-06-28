import React, { useState, useEffect } from 'react';
import MediaList from './MediaList';
import api from '../api/api'
import { convertCSVtoJSON, mergeData } from '../util/data';
import SearchBar from './SearchBar';
import Error from './Error';
import MediaForm from './MediaForm';
import '../css/App.css';

const App = () => {
  const [error, setError] = useState(false);
  const [authors, setAuthors] = useState(null);
  const [books, setBooks] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataList, setDataList] = useState([]);
  const [addData, setAddData] = useState(false);
  const [addDataText, setAddDataText] = useState("Open Data Form");

  const exportData = (e) => {
    e.preventDefault();
  }

  const addDataForm = (e) => {
    e.preventDefault();
    setAddData(!addData);

    if (!addData) {
      setAddDataText("Close Data Form");
    }
    else {
      setAddDataText("Open Data Form");
    }
  }

  useEffect(() => {
    const getData = async () => {
      const authorsData = await api('/authors.csv', 'get');
      const booksData = await api('/books.csv', 'get');
      const magazinesData = await api('/magazines.csv', 'get');

      if (authorsData.status === 200 && booksData.status === 200 && magazinesData.status === 200) {
        setAuthors(convertCSVtoJSON(authorsData, 'authors'));
        setBooks(convertCSVtoJSON(booksData, 'books'));
        setMagazines(convertCSVtoJSON(magazinesData, 'magazines'));
        return true;
      }
      else {
        return false;
      }
    }

    if (!getData()) {
      setError(true);
    }
    else {

      setError(false);
    }
  }, []);

  if (error && dataList != null) {
    return <Error type="data" />
  }
  else {
    useEffect(() => {
      setDataList(mergeData(books, magazines));
    }, [books, magazines]);

    return (
      <div className="ui container">
        <h1 className="ui center aligned header">Reading List</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="two ui buttons">
          <button className="ui teal button" onClick={exportData}>Export Data</button>
          <button className="ui grey button" onClick={addDataForm}>
            {addDataText}&ensp;
          <i class={`caret ${addData? 'up': 'down'} icon`}></i>
          </button>
        </div>
        {addData && <MediaForm dataList={dataList} authorsData={authors} setDataList={setDataList} setAuthors={setAuthors} setAddData={setAddData} />}
        <div className="ui segment">
          <MediaList dataList={dataList} authorsData={authors} searchTerm={searchTerm} />
        </div>
      </div>
    )
  }
};

export default App;
