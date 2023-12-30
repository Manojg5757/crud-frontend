import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Users = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://crud-backend-odmq.onrender.com")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (id) => {
    axios
      .delete("https://crud-backend-odmq.onrender.com/deleteuser/" + id)
      .then((response) => {
        console.log(response.data);
        setUser((prevUser) => prevUser.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center flex-col items-center mt-[150px]">
      <table className="border-2 border-black">
        <thead>
          <tr>
            <th className="text-[12px] p-1 sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 border-black">
              Name
            </th>
            <th className="text-[12px] p-1 sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 border-black">
              Email
            </th>
            <th className="text-[12px] p-1 sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 border-black">
              Age
            </th>
            <th className="text-[12px] p-1 sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 border-black">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 p-2 border-black">
                  {item.userName}
                </td>
                <td className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 p-2 border-black">
                  {item.email}
                </td>
                <td className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 p-2 border-black">
                  {item.age}
                </td>
                <td className="text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl border-2 p-2 border-black ">
                  <div className="flex flex-col  sm:flex-row">
                  <Link to={`/updateuser/${item._id}`}>
                    <button className="bg-black mb-[5px] text-white mr-2 text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl rounded-[10px] p-[5px] ">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteUser(item._id)}
                    className="bg-black text-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white rounded-[10px] p-[5px]"
                  >
                    Delete
                  </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>navigate('/createuser')} className="bg-black rounded-[30px] text-white p-2 mt-[30px]">Create User</button>
    </div>
  );
};

export default Users;
