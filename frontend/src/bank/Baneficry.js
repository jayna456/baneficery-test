import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Baneficry = () => {
  const [lilst,setList] = useState([]);
  const [baneficryList, setBaneficryList] = useState([]);

  useEffect(() => {
    // user get list
    axios.get(process.env.REACT_APP_URL+'/userList')
    .then((userData) => {
      setList(userData.data?.data);
      localStorage.setItem('userId', userData.data?.data?._id)
    })

    // banfeciry get list
    axios.get(process.env.REACT_APP_URL+'/bank')
    .then((userData) => {
      setBaneficryList(userData.data);
    })
  }, [])

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <></>
        <div>
          <Link to={'/add'}>Add Baneficry</Link>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h2>User list</h2>
          <ul className="list-group">
            {lilst.length && lilst.map((item,index) => 
              <li className="list-group-item" key={index}>{item.fullname}</li>
            )}
          </ul>
        </div>
        <div>
            <h2>Baneficry List</h2>
          <ul className='list-group'>
            {baneficryList.length && baneficryList.map((item,index) =>
              <li className='list-group' key={index}>{item.name}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Baneficry