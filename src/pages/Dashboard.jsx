import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <div className="container">
        <div className="">
          <h1>Dashboard</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
