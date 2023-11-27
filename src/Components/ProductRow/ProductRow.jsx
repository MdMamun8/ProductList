/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";
const ProductRow = ({ product, deleteProduct }) => {
  const { id, category, names, price, rating , color} = product;

  //   console.log('id is'+ id)

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{category}</td>
        <td>{names}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{color}</td>
        <td onClick={() => deleteProduct(id)} className='delete-btn'>
          {" "}
          <FaDeleteLeft color='red' />
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
