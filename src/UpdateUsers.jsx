import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const UpdateUsers = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate()
  const {id} = useParams()

  const handleSubmit =(e)=>{
     e.preventDefault()
     axios.put('https://crud-backend-odmq.onrender.com/updateuser/'+id,{userName,email,age})
     .then(result=>{
      console.log(result)
      navigate('/')
     })
     .catch(err=>console.log(err))           
  }

  useEffect(()=>{
    axios.get('hhttps://crud-backend-odmq.onrender.com/getuser/'+id)
    .then((result)=>{
      console.log(result)
      setUserName(result.data.userName)
      setEmail(result.data.email)
      setAge(result.data.age)

    })
    .catch((err)=>console.log(err))
  },[])
  return (
     <div>
      <form className="flex flex-col justify-center items-center mt-[40px]" onSubmit={handleSubmit}>
        <label htmlFor="userName" className="flex flex-col">
          UserName
          <input
            type="text"
            id="userName"
            name="userName"
            className="border-black border-solid border-2  rounded-[20px] p-[5px]"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email" className="flex flex-col">
          Email
          <input
            type="text"
            id="email"
            value={email}
            name="email"
            className="border-black border-solid border-2  rounded-[20px] p-[5px]"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="age" className="flex flex-col">  
          Age
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            className="border-black border-solid border-2 rounded-[20px] p-[5px]"
            onChange={(e)=>setAge(e.target.value)}
          />
        </label>
        <button className="bg-black mt-[20px] p-2 hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-solid transition duration-300 ease-in-out rounded-[20px] text-white" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UpdateUsers