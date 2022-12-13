import { connect } from "react-redux";
import { updateCustomerDetails } from "./redux/reducers/productsDataSlice";
import { RootState } from "./store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  productsData: state.productsData,
});

const mapDispatchToProps = { updateCustomerDetails };

const connector = connect(mapStateToProps, mapDispatchToProps);

const Checkout = (props: any) => {
  const { productList, cartList, customerDetails } = props.productsData;
  const [validation, setValidation] = useState({} as any);
  const navigate = useNavigate();

  const multiInputHandler = (event: any) => {
    props.updateCustomerDetails({
      detailsType: event.target.name,
      data: event.target.value,
    });
  };

  const submitHandler = () => {
    const vObj: any = {};
    const letters = /^[A-Za-z]+$/;
    if (!/^[a-zA-Z]/.test(customerDetails.name)) {
      vObj.name = true;
    }
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!customerDetails.email.match(validRegex)) {
      vObj.email = true;
    }

    const isnum = /^\d+$/.test(customerDetails.phnNo);
    if (!isnum) {
      vObj.phnNo = true;
    }

    setValidation(vObj);
    if (Object.keys(vObj).length === 0) {
      navigate("orderInfo");
    }
  };
  return (
    <div>
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

      <div>
        First Name
        <input
          type="text"
          name="name"
          value={customerDetails.name}
          onChange={multiInputHandler}
        />
        {validation.name && <span>Name is invalid</span>}
        <br />
        Email
        <input
          type="email"
          name="email"
          value={customerDetails.email}
          onChange={multiInputHandler}
        />
        {validation.email && <span>Email is invalid</span>}
        <br />
        Phone No.
        <input
          type="number"
          name="phnNo"
          value={customerDetails.phnNo}
          onChange={multiInputHandler}
        />
        {validation.phnNo && <span>Phn No. is invalid</span>}
      </div>
      <button className="btn btn-primary" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default connector(Checkout);
