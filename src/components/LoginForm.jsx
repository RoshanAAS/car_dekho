
import {
    FormControl,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Text,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState, useReducer, useContext } from "react";
  import { IoMdEye, IoMdEyeOff } from "react-icons/io";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  import { useNavigate } from "react-router-dom";
import { baseUrl } from "../api";
  
  const initState = {
    email: "",
    password: "",
  };
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "email": {
        return { ...state, email: payload };
      }
      case "password": {
        return { ...state, password: payload };
      }
      case "reset": {
        return initState;
      }
      default: {
        throw new Error("Invelid Action type");
      }
    }
  };
  
  export const LoginForm = () => {
   
    const Navigate = useNavigate();
  
    const [show, setShow] = useState(false);
    const [state, dispatch] = useReducer(reducer, initState);
    const handleClick = () => setShow(!show);
  
    const handalChange = (e) => {
      const { name, value } = e.target;
      dispatch({ type: name, payload: value });
    };
    const handalSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "reset" });
  
      axios({
        method: "post",
        url: `${baseUrl}/users/login`,
        data: state,
      }).then((res) => {
        console.log(res)
        if (res.data.token) {
         
          toast.success("Sign Up successfull", {
            position: "top-center",
            theme: "colored",
          });
        //   Navigate("/");
        } else if (res.data.msg === "Wrong Credentials") {
          toast.error("Invalid email or password. Please try again", {
            position: "top-center",
            theme: "colored",
          });
        }else if(res.data.msg==="user does not exist please signup")

        toast.error("user does not exist please signup", {
            position: "top-center",
            theme: "colored",
          });
      });
    };
  
    const { email, password } = state;
    return (
      <form onSubmit={handalSubmit}>
        <FormControl>
          <Input
            onChange={handalChange}
            value={email}
            name="email"
            size="md"
            variant="flushed"
            type="email"
            placeholder="Enter Email"
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputGroup size="md">
            <Input
              onChange={handalChange}
              value={password}
              name="password"
              size="md"
              variant="flushed"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Text h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <IoMdEye /> : <IoMdEyeOff />}
              </Text>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Input
          style={{
            marginTop: "25px",
            backgroundColor: "#e6543b",
            color: "white",
          }}
          type="submit"
          value="Login"
        />
        <ToastContainer />
      </form>
    );
  };