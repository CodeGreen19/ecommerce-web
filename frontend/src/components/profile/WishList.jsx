import React, { Fragment, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { favouriteAction, getFavouriteAction } from "../../redux/actions/user";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";

function WishList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favourite, loading } = useSelector((state) => state.user);

  // remove favourite
  const handleFavouriteRemove = (id) => {
    dispatch(favouriteAction(id)).then(() => {
      dispatch(getFavouriteAction());
    });
  };
  useEffect(() => {
    dispatch(getFavouriteAction());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="wish_main_box mb-9 flex w-full flex-wrap gap-1 bg-[whitesmoke] md:m-[2%] md:w-[60%]">
        {favourite &&
          favourite.map((item, i) => (
            <div
              key={i}
              className="b_1 relative h-[120px] w-[105px] overflow-hidden md:h-[200px] md:w-[180px]"
            >
              <img
                src={item.img}
                className="h-full cursor-pointer "
                alt="nike shoes "
                onClick={() => navigate(`/product/${item._id}`)}
              />
              <span className="b_1 ls_1 absolute bottom-0 left-0 bg-[white] p-[2px] px-1 text-[0.8rem] md:p-1 md:px-3 ">
                {item.price}$
              </span>
              <span className="absolute right-2 top-2">
                <FavoriteIcon />
              </span>
              <button
                disabled={loading ? true : false}
                className="absolute bottom-2 right-2"
                onClick={() => handleFavouriteRemove(item._id)}
              >
                <HighlightOffIcon />
              </button>
            </div>
          ))}
      </div>
    </Fragment>
  );
}

export default WishList;
