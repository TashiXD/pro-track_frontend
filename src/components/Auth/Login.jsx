import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { loginAuth } from "../../redux/users/users.action";
import { Link, useNavigate } from "react-router-dom";

/**
 * COMPONENT
 */
const Login = ({ name, displayName }) => {
  const user = useSelector((state) => state.users.singleUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;
    console.log("email: ", email);
    const password = evt.target.password.value;
    dispatch(loginAuth(email, password));
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1>{name}</h1>
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            name={name}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-center space-x-10">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {displayName}
              </button>
              <Link
                to="/signup"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </Link>
              <a
                class="button google"
                href="http://localhost:8080/auth/google/"
              >
                Sign in with Google
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * PROP TYPES
 */
Login.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default Login;
