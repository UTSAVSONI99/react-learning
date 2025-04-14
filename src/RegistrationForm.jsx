import "./index.css";
import { useState } from "react";

export default function RegistrationForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
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
      <p>
        Hello, my name is
        <span style={{ color: "dodgerblue" }}>
          {user.firstName} {user.lastName}
        </span>
        . My email address is{" "}
        <span style={{ color: "dodgerblue" }}>{user.email}</span> and my phone
        number is
        <span style={{ color: "dodgerblue" }}>{user.phone}</span>.
      </p>

      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col justify-center text-black shadow-lg p-8 ">
          <h1 className="text-3xl font-semibold p-1">Sign Up</h1>
          <p className="text-base p-1">
            Please fill in this form to create an account.
          </p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={user.firstName}
            onChange={handleInputChange}
            className="h-8 mt-1 bg-blue-100"
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={user.lastName}
            onChange={handleInputChange}
            className="h-8 mt-1 bg-blue-100"
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={user.email}
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

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phone"
            placeholder="9876543211"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
            className="h-8 mt-1 bg-blue-100"
          />

          <p className="text-sm mt-2">
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500  w-full text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
