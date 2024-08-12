import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { Button, Checkbox, Input, Tooltip, Divider } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };
  const onCheck = (e: any) => {
    console.log(e.target.value);
  };

  console.log("Google Client ID:", process.env.REACT_APP_CLIENTID_GOOGLE);

  return (
    <section className="flex h-screen items-center justify-center text-black">
      <div className="flex w-full max-w-md flex-col gap-1.5 px-2">
        <div className="flex flex-col gap-3">
          <h1 className="my-2 text-lg font-semibold">Welcome Back</h1>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            className="flex w-full flex-row gap-x-2 text-sm font-semibold"
            size="large"
          >
            <GoogleOutlined />
            <label>Login with Google</label>
          </Button>
        </div>

        <Divider style={{ borderColor: "rgb(209 213 219)" }}>
          <p className="text-sm font-normal text-gray-400">
            or login with Email
          </p>
        </Divider>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* input email */}

          <div className="flex flex-col gap-1.5 text-sm">
            <h1 className="font-medium">Email</h1>
            <Input
              type="email"
              className="py-2 shadow-sm"
              placeholder="Ex : John@email.com"
              prefix={
                <UserOutlined
                  style={{ color: "rgba(0,0,0,.25)" }}
                  className="mr-2"
                />
              }
              onClick={(e: any) => setEmail(e.target.value)}
            />
          </div>

          {/* input password */}
          <div className="flex flex-col gap-1.5 text-sm">
            <h1 className="font-medium">Password</h1>
            <Input.Password
              className="py-2 shadow-sm"
              placeholder="Enter your password"
              prefix={
                <LockOutlined
                  style={{ color: "rgba(0,0,0,.25)" }}
                  className="mr-2"
                />
              }
              iconRender={(visible) =>
                visible ? (
                  <Tooltip title={"show password"}>
                    <EyeTwoTone />
                  </Tooltip>
                ) : (
                  <Tooltip title="hide password">
                    <EyeInvisibleOutlined />
                  </Tooltip>
                )
              }
              onClick={(e: any) => setPassword(e.target.value)}
            />
          </div>

          {/* remember me adn forgot password */}
          <div className="flex justify-between">
            <Checkbox onChange={onCheck}>Remember me</Checkbox>
            <Link to={""} className="text-sm text-blue-500">
              Forgot password?
            </Link>
          </div>
          {/* button submit */}
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="font-medium"
          >
            Login
          </Button>
        </form>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Auth;
