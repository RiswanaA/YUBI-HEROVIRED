import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Searchbox from './Searchbox';
import { Link } from 'react-router-dom';
export default function Delete() {
    let [givenValue, setgivenValue] = useState('');
    let [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let res = await Axios.get("http://127.0.0.1:3007/bookdetail");
            console.log("DATA IS HERE:");
            console.log(res.data);
            setData(res.data);
        }
        fetchData();
    }, [])
    console.log(data);
    let filterData = (data.filter((ele) => ele.id == givenValue));
    async function deleteHere() {

        console.log("in delete here given id value" + givenValue);
        let baseurl = "http://127.0.0.1:3007/bookdetail/"

        let res = await Axios.delete(baseurl + givenValue);
        console.log(res.data);

    }
    
    return (
        <div className='deletePage'>
             <h2>BOOK STOCK MANAGEMENT</h2>
            <p>ENTER ID WHICH YOU WANT TO DELETE:</p>
            <Searchbox setgivenValue={setgivenValue} />
            <div className='addBookButton'>
            <button onClick={deleteHere}>DELETE</button>
            </div>
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
            <div className='addBookButton'>
          <button><Link to="/home">BACK TO HOME</Link></button>
        </div>
        </div>
    );
}