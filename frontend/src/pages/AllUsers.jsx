import React, { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { summaryApi } from "../common";
import { FaUserEdit } from "react-icons/fa";
import ChangeUserRole from "../components/ChangeUserRole";

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    name: "",
    email: "",
    role: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(summaryApi.allUser.url, {
      method: summaryApi.allUser.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div>
      <table
        className="w-full userTable  glass1x rounded border-none 
       "
      >
        <thead>
          <tr className="bg-black text-white">
            <th>S no.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created on</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {allUser.map((el, index) => {
            return (
              <tr key={index} className="hover:bg-[#bbbbcc]">
                <td>{index + 1}</td>
                <td>{el?.name}</td>
                <td>{el?.email}</td>
                <td
                  className={
                    el?.role === "GENERAL" ? "text-green-500" : "text-red-600"
                  }
                >
                  {el?.role}
                </td>
                <td>{moment(el?.createdAt).format("LLL")}</td>
                <td>
                  <button
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <FaUserEdit className="hover:text-empressOrangeHover hover:scale-125" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunction={fetchAllUsers}
        />
      )}
    </div>
  );
};
export default AllUsers;
