
import React from "react";
import {
  Box,
  Image,
  FormControl,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Text,
  Heading,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useReducer } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import AutoPlay from "../components/Carousel";
import { baseUrl } from "../api";

const initState = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "name": {
      return { ...state, name: payload };
    }
    case "email": {
      return { ...state, email: payload };
    }
    case "password": {
      return { ...state, password: payload };
    }
    case "role": {
      return { ...state, role: payload };
    }
    case "reset": {
      return initState;
    }
    default: {
      throw new Error("Invelid Action Type");
    }
  }
};

export const Signup = () => {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);
  const handleClick = () => setShow(!show);

  const handChange = (e) => {
    const { name, value } = e.target;

    dispatch({ type: name, payload: value });
  };
  const handalSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "reset" });
    if (
      state.email === "" ||
      state.password === "" ||
      state.role === "" ||
      state.name === ""
    ) {
      toast.warn(
        "Please fill out all required fields in the registration form",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    } else {
      axios({
        method: "post",
        url: `${baseUrl}/users/register`,
        data: state,
      })
        .then((res) => {
          if (res.data.msg === "user already exist please login") {
            toast.error("User Already Exist, Please Login", {
              position: "top-center",
              theme: "colored",
            });
          } else {
            toast.success("user has been registered", {
              position: "top-center",
              theme: "colored",
            });
          }
        
        })
        .catch((err) => {
          toast.error("Somthing Went Wrong", {
            position: "top-center",
            theme: "colored",
          });
        });
    }
  };
  const { email, role, password, name } = state;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
    >
      <Box
        style={{
            paddingBottom:"20px",
          width: "28%",
          margin: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
       
        }}
      >
        <AutoPlay/>
        
        <Box style={{ width: "80%", margin: "auto" }}>
          <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
            Sign Up
          </Heading>
          <form onSubmit={handalSubmit}>
            <FormControl>
              <Input
                value={name}
                onChange={handChange}
                name="name"
                size="md"
                variant="flushed"
                type="text"
                placeholder="Enter Full Name"
              />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Input
                value={role}
                onChange={handChange}
                name="role"
                size="md"
                variant="flushed"
                type="text"
                placeholder="Enter your role Dealer/Consumer"
              />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Input
                value={email}
                onChange={handChange}
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
                  value={password}
                  onChange={handChange}
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
              value="Register"
            />
          </form>
          <Text style={{ marginTop: "10px" }} fontSize="xs">
            Already registered?
            <a style={{ color: "#e6543b" }} href="/">
              Login
            </a>
          </Text>
        </Box>
      </Box>

      <ToastContainer />
    </div>
  );
};