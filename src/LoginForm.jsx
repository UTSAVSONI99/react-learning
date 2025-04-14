import "./index.css";
import { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <section className=" flex flex-col items-center justify-center gap-8 min-h-screen">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col justify-center text-black shadow-lg p-8 ">
          <h1 className="text-3xl font-semibold p-1">Sign Up</h1>
          <p className="text-base p-1">
            Please fill username and paswword to login into account.
          </p>

          <label htmlFor="firstName">
            <b>UserName</b>
          </label>
          <input
            type="text"
            name="userName"
            placeholder="Enter userName"
            required
            value={user.userName}
            onChange={handleInputChange}
            className="h-8 mt-1 bg-blue-100"
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={user.password}
            onChange={handleInputChange}
            className="h-8 mt-1 bg-blue-100"
          />

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500  w-full text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
