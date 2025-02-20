import { Link } from "react-router-dom";
import errorPage from "../assets/404 Error Page.jpeg";
export const PagesNotFound = () => {
  return (
    <div className="container ">
      <div className="container d-flex align-items-center justify-content-center">
        <img className="img-fluid" src={errorPage} alt="404 Error" />
      </div>
      <p className="text-center m-5">
        <Link to={"/"} className="btn btn-danger">
          Goto Home Page
        </Link>
      </p>
    </div>
  );
};
