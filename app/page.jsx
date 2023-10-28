"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [users, setUsers] = useState([])
  const getData = async ()=>{
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      const data = response.data
      setUsers(data)
      
    }
    catch(error){
      console.error("Error Data not found")
    }
  }
  useEffect(() => {
    
    getData();
  }, [])
  
  return ( 
    <>
      <button onClick={
        getData
      } className=' bg-green-600 p-3 m-5 rounded-xl '>Click me </button>
      <div className=' '>
        <div className='m-10 p-5 bg-slate-400 w-auto h-auto'>
          <ul>{
            users.map((e)=>{
              {
                return <li>{e.username} ... <a href={`/${e.id}`}>Explore</a></li>
              }
            })
          }
          </ul>
        </div>
      </div>
    </>
  )
}

export default page