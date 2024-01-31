import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Footer from "../../footer/Footer";
import { singleProduct, updateProduct } from "../../../redux/actions/product";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { sizes } from "../../utils/ProductUtils";

function EditProduct({ productId }) {
  const { singleProduct: productInfo } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const [existImagesPreview, setExistImagesPreview] = useState([]);
  const [existImages, setExistImages] = useState([]);
  // get qty and size
  const [qty, setQty] = useState("");
  const [size, setSize] = useState("");
  const [qtyAndSizeArr, setQtyAndSizeArr] = useState([]);
  // ref
  const imageBtnRef = useRef();

  // -------items -------

  // let sizes = ["size", "4.5", "5", "5.5", "6", "6.5", "7", "7.5"];

  // -------items -------

  const handleAddSizeAndQty = () => {
    if (size === "" || size === "size" || qty === "") return;

    let sizeExists = false;

    qtyAndSizeArr.forEach((item, i) => {
      if (item.size.toString() === size.toString()) {
        qtyAndSizeArr[i].qty = qty;
        sizeExists = true;
        return;
      }
    });

    setQty("");
    if (!sizeExists) {
      const data = {
        size: size,
        qty: qty,
      };
      setQtyAndSizeArr((exist) => [...exist, data]);
    } else {
      setQtyAndSizeArr([...qtyAndSizeArr]);
    }
  };

  // uploadin image inpu
  const handleAddImage = () => {
    imageBtnRef.current.click();
  };
  // for uploading images

  const productImages = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  // handle submit

  const handleSubmit = async () => {
    const productImages = [];
    images.forEach((image) => {
      productImages.push({ image: image });
    });

    let removedImg = [];
    existImages.forEach((image) => {
      if (!existImagesPreview.includes(image)) {
        removedImg.push(image);
      }
    });

    setName("");
    setDescription("");
    setPrice("");
    setQtyAndSizeArr([]);
    setImages([]);
    setImagesPreview([]);
    setExistImagesPreview([]);
    const data = {
      name,
      description,
      price,
      removedImg,
      newImages: productImages,
      existImg: existImagesPreview,
      user: "6545d0883811b0e29a671326",
      stock: qtyAndSizeArr,
    };

    dispatch(updateProduct(productInfo._id, data));
  };

  // to change exist images
  const handleChangeExistImg = (data) => {
    let newImgArr = existImagesPreview.filter((item) => item._id !== data);
    setExistImagesPreview(newImgArr);
  };
  useEffect(() => {
    if (productId) {
      dispatch(singleProduct(productId));
    } else {
      navigate("/admin/products");
    }
  }, [dispatch, productId, navigate]);

  useEffect(() => {
    if (productInfo) {
      setName(productInfo.name);
      setPrice(productInfo.price);
      setDescription(productInfo.description);
      let data = [];
      productInfo.stock.forEach((item) => {
        data.push({ size: item.size, qty: item.qty });
      });
      setQtyAndSizeArr(data);
      // set color and brand
      setColor(productInfo.color);
      setBrand(productInfo.brand);
      // set preview images
      setExistImagesPreview(productInfo.images);
      setExistImages(productInfo.images);
    }
  }, [productInfo]);

  return (
    <Fragment>
      {productId ? (
        <Fragment>
          <div className=" createProduct_box min-h-[70vh] w-full  bg-[whitesmoke] p-1 pt-3 md:p-10 xl:pr-[30%]">
            <div className="createProduct_nameBox flex  flex-wrap justify-between gap-2">
              <input
                placeholder="product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <div className="ls_1">
                Color: <span className="font-bold">{color}</span>
              </div>
              <div className="ls_1">
                Brand: <span className="font-bold text-[green]">{brand}</span>
              </div>
            </div>
            <div className="w-ful flex flex-wrap items-center justify-between ">
              <div className="flex w-full flex-wrap items-center justify-between gap-1 md:w-[unset] md:justify-center ">
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {sizes.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
                <button onClick={handleAddSizeAndQty}>
                  Add <AddIcon />
                </button>
              </div>
              <table className="size_table w-full sm:w-[45%]">
                <tr>
                  <td>Size</td>
                  <td>Qty</td>
                </tr>
                {qtyAndSizeArr.map((item) => (
                  <tr>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))}
              </table>
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="enter description"
                rows="5"
              ></textarea>
            </div>
            <div className="hidden">
              <input
                type="file"
                accept="image\*"
                multiple
                onChange={productImages}
                ref={imageBtnRef}
              />
            </div>
            <button onClick={handleAddImage}>
              Add images <AddPhotoAlternateIcon />
            </button>
            {/* showing images  */}
            {imagesPreview.length !== 0 && (
              <h1 className="ls_1 my-2">New Images</h1>
            )}
            <div className="flex flex-wrap justify-between gap-1 md:justify-normal">
              {imagesPreview.map((image) => (
                <div className="mb-1 h-[100px] w-[100px] overflow-hidden border-[1px] border-[#3e3e3e5b] sm:h-[200px] sm:w-[200px]">
                  <img className="h-full" src={image} alt="preview" />
                </div>
              ))}
            </div>
            <h1 className="ls_1 my-3 ">Existing Images</h1>
            <div className="flex flex-wrap justify-between gap-1 md:justify-normal">
              {existImagesPreview.map((item) => (
                <div className="relative mb-1 h-[100px] w-[100px] overflow-hidden border-[1px] border-[#3e3e3e5b] sm:h-[200px] sm:w-[200px]">
                  <img className="h-full" src={item.url} alt="preview" />
                  <span
                    className="absolute right-2 top-2"
                    onClick={() => handleChangeExistImg(item._id)}
                  >
                    <CancelIcon
                      sx={{
                        fontSize: "1.3rem !important",
                        cursor: "pointer",
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button onClick={handleSubmit}>
                Update <DriveFolderUploadIcon />
              </button>
            </div>
          </div>
          <Footer />
        </Fragment>
      ) : (
        <div className="w-full p-2 pt-8 text-[0.9rem] md:m-auto md:w-[80%] md:text-[1rem]">
          <h1 className="my-3 text-[1.2rem]">
            There is no Selected Product for Update, to update any product,
            follow the setps:
          </h1>
          <ul>
            <li>
              <span>Step 1: </span>Go to (Products) section,
            </li>
            <li>
              <span>Step 2: </span>Click the edit button of a specific Product,
            </li>
            <li>
              <span>Step 3: </span>You will be redirected to this section with
              all of the product information,
            </li>
            <li>
              <span>Step 4: </span>Simple edit and Update the information,
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default EditProduct;
