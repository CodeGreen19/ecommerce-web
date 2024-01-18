import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/product";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Footer from "../../footer/Footer";
import toast from "react-hot-toast";
import Loading from "../../loading/Loading";
import { heightArr, colors, sizes } from "../../utils/Items";
import { categoryArr } from "../../utils/Dashboard";

function CreateProduct() {
  const { loading } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [height, setHeight] = useState([]);
  const [color, setColor] = useState([]);
  const [price, setPrice] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  // get qty and size
  const [qty, setQty] = useState("");
  const [size, setSize] = useState("");
  const [qtyAndSizeArr, setQtyAndSizeArr] = useState([]);
  // get category
  const [category, setCategory] = useState([]);
  // ref
  const imageBtnRef = useRef();

  // category handler
  const categoryHandler = (item) => {
    if (category.includes(item)) {
      let newCategory = category.filter((exist) => exist !== item);
      setCategory(newCategory);
    } else {
      setCategory((exists) => [...exists, item]);
    }
  };

  console.log(category);
  /// handle size and quantity

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !description ||
      !price ||
      !qtyAndSizeArr ||
      !images ||
      !category
    ) {
      return toast.error("Please fill all the fields");
    }
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
      category,
      price,
      color,
      height,
      productImages,
      user: "659d08a6c335bb1a86962f0d",
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
              <select onChange={(e) => setHeight(e.target.value)}>
                {heightArr.map((item) => (
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
            {/* category  */}
            <h3 className="ls_1 mt-3 text-[1.1rem]">
              Select single or multiple category
            </h3>
            <form className="category_form mb-3">
              {categoryArr &&
                categoryArr.map((item) => (
                  <div className="ml-1 flex items-center justify-start">
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      name={item.name}
                      onClick={(e) => categoryHandler(e.target.name)}
                    />{" "}
                    <span className="mb-[5px] ml-1">{item.name}</span>
                  </div>
                ))}
            </form>

            {/* category  */}
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
