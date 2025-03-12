import { useState } from "react";
import { ROLE } from "../common/role";
import { RiCloseCircleFill } from "react-icons/ri";
import { summaryApi } from "../common";
import { toast } from "react-toastify";

const ChangeUserRole = ({
  name,
  email,
  role,
  onClose,
  userId,
  callFunction,
}) => {
  const [userRole, setUserRole] = useState(role);
  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
  };
  const updateUserRole = async () => {
    const fetchResponse = await fetch(summaryApi.updateUser.url, {
      method: summaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });
    const responseData = await fetchResponse.json();
    if (responseData.success) {
      toast(responseData.message);
      callFunction();
      onClose();
    }
    console.log("response update ", responseData);
  };
  return (
    <div className="fullScreenGlass  ">
      <div className="mx-auto max-w-sm w-full p-4 shadow-md  bg-white rounded-lg ">
        <button
          className="text-empressOrange hover:text-empressOrangeHover hover:scale-125 block ml-auto"
          onClick={onClose}
        >
          <RiCloseCircleFill />
        </button>
        <h1 className="pb-4 text-lg font-bold"> change user role</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <div className="flex items-center justify-between my-4">
          <p>Role:</p>
          <select
            className=" px-4 py-1 glass box-border outline-none  "
            value={userRole}
            onChange={handleOnChangeSelect}
          >
            {Object.values(ROLE).map((el, index) => {
              return (
                <option key={index} value={el} className="">
                  {el}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={updateUserRole}
          className="max-w-fit mx-auto block p-2 px-3 h-8 rounded-full py-1 bg-empressOrange hover:bg-empressOrangeHover text-white"
        >
          Change Role
        </button>
      </div>
    </div>
  );
};
export default ChangeUserRole;
