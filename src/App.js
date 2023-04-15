import { useState } from "react";
import "./App.css";

function App() {
  //initial values which is stored as object
  let formvalues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  //usestate for formvalues
  let [values, setvalues] = useState(formvalues);
  //usestate for validation
  const [Errors, setErrors] = useState({});
  //usestate for submitting the form
  const [isSubmit, setIsSubmit] = useState(false);

  //function for input changing
  let handlechange = (e) => {
    let { name, value } = e.target;
    //it stores all the form values
    setvalues({ ...values, [name]: value });
  };
  //whenever signup btn is clicked
  const submitform = () => {
    //check all the form values which is stores in values
    //call the validate function
    setErrors(validate(values));
    //make issumbit true
    setIsSubmit(true);
  };
  // validation function for all inputs
  const validate = (x) => {
    console.log(x);
    let errors = {};
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex2 =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

    if (!x.username || x.username.split(" ").length < 2) {
      errors.username = "Username is invalid!";
    }
    if (!x.email || !regex1.test(x.email)) {
      errors.email = "Email is invalid!";
    }
    if (!x.password || !regex2.test(x.password)) {
      errors.password = "Password is invalid";
    }
    if (!x.confirmpassword || x.password !== x.confirmpassword) {
      errors.confirmpassword = "mismatch password";
    }

    console.log(errors);
    return errors;
  };

  return (
    <div className="App">
      <h1>SignUp Form</h1>
      <div className="form">
        <form action="">
          <br />
          <input
            type="text"
            name="username"
            id=""
            placeholder="Enter your name"
            onChange={handlechange}
            value={values.username}
          />
          <p>{Errors.username}</p>

          <br />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            onChange={handlechange}
            value={values.email}
          />
          <p>{Errors.email}</p>

          <br />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
            onChange={handlechange}
            value={values.password}
          />
          <p>{Errors.password}</p>

          <br />

          <input
            type="password"
            name="confirmpassword"
            id=""
            placeholder="Confirm password"
            onChange={handlechange}
            value={values.confirmpassword}
          />
          <p>{Errors.confirmpassword}</p>

          <br />

          <button type="button" onClick={submitform}>
            SignUp
          </button>
          {Object.keys(Errors).length === 0 && isSubmit ? (
            <div style={{ color: "green", padding: "10px" }}>
              Signed in successfully
            </div>
          ) : (
            <div style={{ color: "red", padding: "10px" }}>
              **All field are mandatory in correct format!!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
