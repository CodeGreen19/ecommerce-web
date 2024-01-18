import React, { Fragment, useEffect } from "react";
import Options from "../Options";
import Area from "./charts/Area";
import Bar from "./charts/BarLine";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../../redux/actions/product";
import {
  addArrayElements,
  formatDate,
  formatedAreaData,
} from "../../utils/Dashboard";
import { AllOrderAction } from "../../../redux/actions/order";

function Dashboard() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);
  const { adminOrders } = useSelector((state) => state.order);

  // for calculating products and stock bar .......................
  let productsData = [];
  allProducts &&
    allProducts.forEach((product) => {
      productsData.push({
        name: product.name,
        stock: addArrayElements(product.stock.map((stock) => stock.qty)),
      });
    });
  // for calculating products and stock bar .......................

  // for calculating earning area chart  .......................
  let initialAreaData = [];
  adminOrders &&
    adminOrders.forEach((item) => {
      initialAreaData.push({
        price: item.price,
        data: formatDate(item.createdAt),
      });
    });
  let areaData = formatedAreaData(initialAreaData);

  // for calculating earning area chart  .......................

  useEffect(() => {
    dispatch(allProduct());
    dispatch(AllOrderAction());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="mt-[30px] sm:ml-[260px] sm:mt-0">
        <div>
          <Options />
        </div>
        <div className=" min-h-[90vh] w-full overflow-x-auto ">
          <div className=" min-w-[768px]">
            <div className="m-2">
              <Area areaData={areaData} />
            </div>
            <div className="m-2">
              <Bar productsData={productsData} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Dashboard;
