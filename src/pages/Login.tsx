import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import "./login.css";

const Login: React.FC = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                type="email"
                value={values.email}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                value={values.password}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
};

export default Login;
