/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import ProductRow from "../Components/ProductRow/ProductRow";
import "../Pages/App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [names, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [color, setColor] = useState("GREEN");
  //clear input
  const cleatInput = () => {
    setId("");
    setCategory("");
    setName("");
    setPrice("");
    setRating("");
  };
  //handle input
  const handleForm = (e) => {
    e.preventDefault();
    const product = {
      id,
      category,
      names,
      price,
      rating,
      color,
    };
    setProducts([...products, product]);
    cleatInput();
  };
  // delete product
  const deleteProduct = (id) => {
    const filteredProduct = products.filter((product) => product.id !== id);
    console.log(filteredProduct);
    setProducts(filteredProduct);
  };

  //set item in local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(products));
    localStorage.removeItem("item");
  }, [products]);

  //
  const handleColorChange = (e) => setColor(e.target.value);

  return (
    <>
      <div className='wrapper'>
        <h1>Product List App</h1>
        <p>Add and view your products</p>
        <div className='main'>
          <form className='form-group' onSubmit={handleForm}>
            <label>Id : </label>
            <input
              value={id > 0 ? id : 0}
              onChange={(e) => setId(e.target.value)}
              type='number'
              className='form-control'
              required
            />
            <br></br>
            <label>Category : </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type='text'
              className='form-control'
              required
            />
            <br></br>
            <label>Product Name : </label>
            <input
              value={names}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='form-control'
              required
            />
            <br></br>
            <label>Price : </label>
            <input
              value={price > 0 ? price : 0}
              onChange={(e) => setPrice(e.target.value)}
              type='number'
              className='form-control'
              required
            />
            <br></br>
            <label>Rating : </label>
            <input
              value={rating > 0 ? rating : 0}
              onChange={(e) => setRating(e.target.value)}
              type='number'
              className='form-control'
              required
            />
            <label htmlFor='selectColor'>Choose color</label>
            <select
              onChange={handleColorChange}
              value={color}
              name=''
              id='selectColor'>
              <option value='GREEN'>Green</option>
              <option value='RED'>Red</option>
              <option value='BLACK'>Black</option>
            </select>
            <button type='submit' className='add-button'>
              Add Product
            </button>
          </form>
        </div>
        <div className='view-container'>
          <div className='table-responsive'>
            {products.length > 0 && (
              <table className='table'>
                <tr className='table-row'>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Names</th>
                  <th>price</th>
                  <th>Rating</th>
                  <th>Choose color</th>
                  <th>Delete</th>
                </tr>

                {products.map((product) => (
                  <ProductRow product={product} deleteProduct={deleteProduct} />
                ))}

              </table>
            )}
              {
                products.length > 0 &&   <button
                className='remove-btn'
                type='submit'
                onClick={() => setProducts([])}>
                Delete All
              </button>
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
