import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => navigate("productList")}
      >
        Find Products
      </button>
    </div>
  );
};

export default Home;
