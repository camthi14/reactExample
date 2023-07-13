import { Button, Space } from "antd";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useLayoutEffect,
} from "react";

import { TextInput } from "~/components";
import { LocalStorage, Paths, Status } from "~/types";
import { authService } from "~/services";

import "./login.css";

const LoginV2: React.FC = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>(Status.Ready);
  const [error, setError] = useState("");
  const token = localStorage.getItem(LocalStorage.Token);

  useLayoutEffect(() => {
    if (!Boolean(token)) return;
    navigate(Paths.Home, { replace: true });
  }, [token]);

  const onFinish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(Status.Start);

    return new Promise(async (resolve, rejects) => {
      try {
        const response = await authService.login(values);
        setStatus(Status.Complete);
        localStorage.setItem(LocalStorage.Token, response.token);
        navigate(Paths.Home, { replace: true });
        resolve(true);
      } catch (error) {
        setStatus(Status.Fail);
        if (error instanceof AxiosError) {
          if (error.response && error.response.data) {
            setError(error.response.data.error);
          }
        }
      }
    });
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          <form action="" onSubmit={onFinish}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <TextInput
              autoComplete="hidden"
              label="Email"
              value={values.email}
              name="email"
              type="email"
              placeholder="Vui lòng nhập email"
              required
              onChangeInput={onChangeInput}
            />
            <TextInput
              autoComplete="hidden"
              label="Password"
              value={values.password}
              name="password"
              type="password"
              placeholder="Vui lòng nhập password"
              required
              onChangeInput={onChangeInput}
            />

            <Button
              type="primary"
              htmlType="submit"
              loading={status === Status.Start}
            >
              {status === Status.Start ? "Loading" : "Đăng nhập"}
            </Button>
          </form>
        </Space>
      </div>
    </div>
  );
};

export default LoginV2;
