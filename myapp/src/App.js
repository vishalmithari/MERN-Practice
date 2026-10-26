import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    console.log(form);

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
  <form className="form" onSubmit={handleSubmit}>
    <h2>Registration Form</h2>

    <div className="input-group">
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-group">
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-group">
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-group">
      <label>Phone No.</label>
      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone no"
        value={form.phone}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit">Register</button>
  </form>
</div>
  );
}

export default App;