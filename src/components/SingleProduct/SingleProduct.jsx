import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa"; 
const SingleProduct = () => {
    return
    ( <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">img</div>
                    <div className="right">product details</div>
               
            </div>
        </div>
    </div>
    );
};

export default SingleProduct;
