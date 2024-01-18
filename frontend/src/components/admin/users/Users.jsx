import React, { Fragment, useEffect, useState } from "react";
import Options from "../Options";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  allUsers,
  deleteUserAction,
  updateRoleAction,
} from "../../../redux/actions/user";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../style/Users.css";

function Users() {
  const { allUsers: users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState();
  const [role, setRole] = useState("");
  // update

  const updateHandler = (id) => {
    let info = { role, id };
    dispatch(updateRoleAction(info)).then(() => {
      dispatch(allUsers());
    });
    setEditId("");
  };

  const handleEdit = (id) => {
    setEditId(id);
  };
  // delete
  const deleteHandler = (id) => {
    dispatch(deleteUserAction(id)).then(() => {
      dispatch(allUsers());
    });
  };
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="mt-[30px] sm:ml-[260px] sm:mt-0">
        <div>
          <Options />
        </div>

        <div className=" min-h-[90vh] w-full overflow-x-auto ">
          <div className=" min-w-[768px] bg-[whitesmoke]">
            <ul className="all_users_list bg-[#090909d8] p-2 text-[white]">
              <li>User Id</li>
              <li>Email</li>
              <li>Role</li>
              <li>Actions</li>
            </ul>
            {users &&
              users.map((user) => (
                <ul
                  className={`all_users_list my-1 border-[1px] border-[#2625252f] bg-[white] p-2`}
                  key={user._id}
                >
                  <li>{user._id}</li>
                  <li className="text-[1rem]">{user.email}</li>
                  {editId === user._id ? (
                    <div className="flex items-center justify-start ">
                      <select
                        className="b_1 h-[80%] w-[90px] px-2 outline-none"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="role">Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                      <button
                        className="b_1 h-[80%] px-3 active:bg-[gray] active:text-[white]"
                        onClick={() => updateHandler(user._id)}
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <li className="ls_1">{user.role}</li>
                  )}
                  <li>
                    <span onClick={() => handleEdit(user._id)}>Edit</span>

                    <span onClick={() => deleteHandler(user._id)}>
                      <DeleteOutlineIcon />
                    </span>
                  </li>
                </ul>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Users;
