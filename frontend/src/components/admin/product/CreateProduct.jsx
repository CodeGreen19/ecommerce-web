import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/product";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Footer from "../../footer/Footer";
import Loading from "../../loading/Loading";
import { brands, colors, sizes } from "../../utils/Items";

function CreateProduct() {
  const { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  // get qty and size
  const [qty, setQty] = useState("");
  const [size, setSize] = useState("");
  const [qtyAndSizeArr, setQtyAndSizeArr] = useState([]);
  // ref
  const imageBtnRef = useRef();

  const handleAddSizeAndQty = () => {
    if (size === "" || size === "size" || qty === "") return;

    let sizeExists = false;

    qtyAndSizeArr.forEach((item, i) => {
      if (item.size === size) {
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

    setName("");
    setDescription("");
    setPrice("");
    setQtyAndSizeArr([]);
    setImages([]);
    setImagesPreview([]);
    const data = {
      name,
      description,
      price,
      color,
      brand,
      productImages,
      user: "6545d0883811b0e29a671326",
      stock: qtyAndSizeArr,
    };
    dispatch(createProduct(data));
  };
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {" "}
          <div className=" createProduct_box min-h-[70vh] w-full bg-[whitesmoke]  p-1 pt-3 md:p-10 xl:pr-[30%]">
            <div className="createProduct_nameBox flex flex-wrap justify-between gap-2 ">
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
              <select onChange={(e) => setBrand(e.target.value)}>
                {brands.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select onChange={(e) => setColor(e.target.value)}>
                {colors.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
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
            <div className="flex flex-wrap justify-between gap-1 md:justify-normal">
              {imagesPreview.map((image) => (
                <div className="mb-1 h-[100px] w-[100px] overflow-hidden border-[1px] border-[#3e3e3e5b] sm:h-[200px] sm:w-[200px]">
                  <img className="h-full" src={image} alt="preview" />
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button onClick={handleSubmit}>
                create <DriveFolderUploadIcon />
              </button>
            </div>
          </div>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
}

export default CreateProduct;
