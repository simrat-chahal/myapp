import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "./redux/reducers/productsDataSlice";
import { RootState } from "./store";

const mapStateToProps = (state: RootState) => ({
  productsData: state.productsData,
});

const mapDispatchToProps = {
  addCartItem,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

console.log("dsfjdsfldsjl");

const ProductList = (props: any) => {
  const { productList, cartList } = props.productsData;
  return (
    <div>
      {productList.map((item: any) => (
        <div
          className="d-flex justify-content-center m-2"
          key={item.productName}
        >
          <div className="me-2">{item.productName}</div>
          <div className="me-2">
            {"rs "}
            {item.price}
          </div>
          <button
            className="btn btn-primary ms-2"
            disabled={cartList.some(
              (listItem: any) => item.productName === listItem.productName
            )}
            onClick={() =>
              props.addCartItem({
                productName: item.productName,
                price: item.price,
              })
            }
          >
            Buy
          </button>
        </div>
      ))}
      <div className="d-flex justify-content-center">
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            disabled={cartList.length ? false : true}
          >
            Checkout-
          </button>
        </Link>
      </div>
    </div>
  );
};

export default connector(ProductList);
