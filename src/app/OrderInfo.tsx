import { connect } from "react-redux";
import { RootState } from "./store";

const mapStateToProps = (state: RootState) => ({
    productsData: state.productsData,
  });
  
  const mapDispatchToProps = {};
  
  const connector = connect(mapStateToProps, mapDispatchToProps);

const OrderInfo = (props: any) => {
    const { cartList, customerDetails } = props.productsData;
    return ( <div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item: any, index: number) => (
            <tr>
              <th scope="row">{index}</th>
              <td>{item.productName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <div>{customerDetails.name}</div>
      <div>{customerDetails.email}</div>
      <div>{customerDetails.phnNo}</div>
    </div> );
}
 
export default connector(OrderInfo);