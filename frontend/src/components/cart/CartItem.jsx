import React, { Fragment, useEffect } from "react";
import "../style/Cart.css";
import Card from "./Card";
import AutoText from "../home/AutoText";
import Navbar from "../navbar/Navbar";
import FooterContent from "../footer/FooterContent";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductLoading from "../loading/ProductLoading";
import { getCartAction } from "../../redux/actions/cart";

function CartItem() {
  const { loading, cart, summery } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [openPromo, setOpenPromo] = useState(false);
  const checkoutHandler = () => {
    navigate("/cart/payment");
  };

  useEffect(() => {
    dispatch(getCartAction());
    //eslint-disable-next-line
  }, [dispatch]);

  return (
    <Fragment>
      <AutoText />
      <Navbar />
      {cart && cart.length === 0 && (
        <div className="flex h-[100px] w-full items-center justify-center  text-[1rem] md:text-[1.2rem]">
          The Card Is Empty...{" "}
          <Link className="bb_1" to={`/products`}>
            Shop Now
          </Link>
        </div>
      )}
      <div className="cart_items_box z-10 w-full ">
        {loading && <ProductLoading />}
        <div className="m-auto my-5 flex  w-full flex-col  lg:flex-row xl:w-[1280px] ">
          <div className="left_side flex w-full flex-col gap-1 sm:min-h-[80vh] lg:w-[65%]">
            {cart && cart.map((item) => <Card cartInfo={item} />)}
          </div>
          {cart && cart.length !== 0 && (
            <div className="right_side mt-4 flex  w-full items-start md:ml-3 lg:mt-0 lg:w-[35%]">
              <div className="w-full border-[1px] border-[#00000036] bg-gray-200 p-1">
                <h1 className="w-full p-2 text-[1.5rem] font-bold ">Summery</h1>

                <div className="price_info bg-[white] p-2">
                  <div>
                    <span>
                      Subtotal{" "}
                      <span className="text-[0.9rem]">
                        ({summery && summery.count} items)
                      </span>
                    </span>
                    <span>{summery && summery.subtotal}$</span>
                  </div>
                  <div>
                    <span>Shipping & Handling</span>
                    <span>{summery && summery.shippingCost}$</span>
                  </div>
                  <div>
                    <span>Tax</span>
                    <span>{summery && summery.tax}$</span>
                  </div>
                  <div className="border-t-[1px] border-[#00000026]">
                    <span className="text-[1.2rem]">Total</span>
                    <span className="text-[1.2rem]">
                      {summery && summery.total}$
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className="ls_1 my-2 ml-[1px] hidden bg-[#000000c5] px-4 py-2 text-white sm:block "
                    onClick={checkoutHandler}
                  >
                    Check Out
                  </button>
                </div>
                {/* for mobile chect out button */}
                <div className="bt_1 fixed bottom-0 left-0 z-20 flex w-full items-center justify-center bg-[white] p-2 sm:hidden ">
                  <button
                    className="ls_1  my-2  bg-[#000000c5] px-6 py-2 text-white  "
                    onClick={checkoutHandler}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterContent />
      <Footer />
    </Fragment>
  );
}

export default CartItem;
