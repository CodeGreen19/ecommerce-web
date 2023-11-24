import React, { useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/user";

function Account() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="user_info_box w-full bg-[whitesmoke] p-[5%] md:m-[2%] md:w-[60%]">
      <h2>
        name
        <span className="name_span">{`(name is taken from you gmail account)`}</span>
      </h2>
      <span>{user.name}</span>
      <h2>email</h2>
      <span>{user.email}</span>
      <div className="mt-4">
        <h2>logout from ShoeSafari</h2>
        <p>
          if you logout from shoesafari, you have to give you credential to
          login again
        </p>
        <button
          className="my-1 bg-[#4c4c4c] px-2 py-1 text-[white] "
          onClick={logoutHandler}
        >
          log me out
          <ArrowRightAltIcon />
        </button>
      </div>
      <div className="mt-4">
        <h2>manage account</h2>
        <button className="my-1 bg-[#4c4c4c] px-2 py-1 text-[white] ">
          remove account <ArrowRightAltIcon />
        </button>
        <p>
          if you logout from shoesafari, you have to give you credential to
          login again
        </p>
      </div>
    </div>
  );
}

export default Account;
