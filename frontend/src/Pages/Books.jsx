import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import BooksSection from '../Components/BooksSection';

const Books = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            await axios.get("http://localhost:3000/api/v1/getBooks")
            .then((res) => setData(res.data.books))
        };
        fetch();
    }, []);
  return (
    <div style={{minHeight: '91.5vh'}}>
        <div className='d-flex justify-content-center align-item-center py-3'>
            <h2 className='text-white m-1'>Books Section</h2>
            
        </div>
        {
                Data ? <BooksSection dataset={setData} data={Data} /> : <div>...Loading</div>
            }
    </div>
  )
}

export default Books