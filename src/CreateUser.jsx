import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate()

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3100/createuser", { userName, email, age })
      .then((result) => {
        console.log(result);
        navigate('/')
        setUserName("");
        setEmail("");
        setAge("");
      })
      .catch((err) => console.log(err));
  };
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
            onChange={handleUsername}
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
            onChange={handleEmail}
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
            onChange={handleAge}
          />
        </label>
        <button className="bg-black mt-[20px] p-2 hover:bg-white hover:text-black hover:border-black hover:border-2 hover:border-solid transition duration-300 ease-in-out rounded-[20px] text-white" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
