import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Searchbox from './Searchbox';
import { Link } from 'react-router-dom';

export default function Updatebook() {
  let [givenValue, setgivenValue] = useState('');
  let [data, setData] = useState([]);
  let [newdata, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await Axios.get("http://127.0.0.1:3007/bookdetail");
      setData(res.data);
    }
    fetchData();
  }, [])
  const handleChange = (e) => {
    setNewData({
      ...newdata,

      [e.target.name]: e.target.value
    })
  }

  async function updateHere() {
    let baseurl = "http://127.0.0.1:3007/bookdetail/"
    let result = await Axios.put(baseurl + givenValue, newdata)
  }

  let filterData = (data.filter((ele) => ele.id == givenValue));

  return (
    <>
      {filterData.length ? filterData.map((ele) => (
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
        :

        <div>
        </div>

      };
      <div className='bookNewDetails'>
      <h2>BOOK STOCK MANAGEMENT</h2>
        <p><b>ENTER ID WHICH YOU WANT TO UPDATE:</b></p>
        <Searchbox setgivenValue={setgivenValue} />
        {filterData.length ? filterData.map((ele) => (

          <div className='addBookPage'>
            <h3>ENTER NEW DETAILS OF THAT RECORD </h3>
            <div className='addBookDetails'>
              <div className='addBook'>
                Book Name: <input type='text' name='bookname' onChange={handleChange} /><br /> <br />
                Author: <input type='text' name='author' onChange={handleChange} /><br /> <br />
                Quantity: <input type='text' name='count' onChange={handleChange} /><br /><br />
              </div>
              <div className='addBookButton'>
                <button onClick={updateHere}> CLICK TO UPDATE</button>
              </div>
            </div>
          </div>
        ))
          :
          <div>
            
          </div>
        }
        <div className='addBookButton'>
          <button><Link to="/home">BACK TO HOME</Link></button>
        </div>
      </div>
    </>
  );
}