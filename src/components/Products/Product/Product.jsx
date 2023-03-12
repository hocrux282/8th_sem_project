import "./Product.scss";
import { useNavigate } from "react-router-dom";
//import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        {id && data != null ? (
          <img
            src={
              process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
            }
            alt=""
          />
        ) : (
          ""
        )}
      </div>

      <div className="prod-details">
        <span className="name">{data != null ? data.title : ""}</span>
        <span className="price">&#8377;{data != null ? data.price : ""}</span>
      </div>
    </div>
  );
};

export default Product;
