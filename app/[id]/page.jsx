"use client"
import React,{useState , useEffect} from 'react'
import axios from 'axios'


const page = ({params}) => {
    const {id}= params;
    const [users, setUsers] = useState([])
    const getUser = async ()=>{
      try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        const data = response.data
        setUsers(data)
        
      }
      catch(error){
        console.error("Error Data not found")
      }
    }
    useEffect(() => {
      getUser();
    }, [])
    
  return (
    <div className=' m-10 p-5'>
       <h1> id: {users.id}, username: {users.username}, name :  {users.name}, phone:  {users.phone}, email: {users.email} </h1>
    </div>

  )
}

export default page