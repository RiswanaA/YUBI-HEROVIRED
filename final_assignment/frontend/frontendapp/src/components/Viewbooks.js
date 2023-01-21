import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
export default function Viewbooks() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await Axios.get("http://127.0.0.1:3007/bookdetail");
      setData(result.data);
    }
    fetchData();
  }, [])
  return (
    <>
      <h2>BOOK STOCK MANAGEMENT</h2>
      <h3>LIST OF BOOKS:</h3>
      {data.length && data.map((ele) => (
        <div className='displayBookDetails'>
          <table className='bookDetails'>
            <tr>
              <td>Book ID</td>
              <td><div>{ele.id}</div></td>
            </tr>
            <tr>
              <td>Book Name</td>
              <td><div><b>{ele.bookname}</b></div></td>
            </tr>
            <tr>
              <td>Author Name</td>
              <td><div>{ele.author}</div></td>
            </tr>
            <tr>
              <td>Book Quantity</td>
              <td><div>{ele.count}</div></td>
            </tr>
          </table>

        </div>
      ))
      }        <div className='addBookButton'>
        <button><Link to="/home">BACK TO HOME</Link></button>
      </div>

    </>
  );
}