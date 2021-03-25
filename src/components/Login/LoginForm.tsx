import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useSignIn } from "react-auth-kit";
import { performLogin } from "../../api/AuthRequests";
import "../../css/loginPage.css";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const LoginForm: React.FC = () => {
  const signIn = useSignIn();
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const key = "updatable";
  const tailLayout = {
    wrapperCol: { offset: 16, span: 8 },
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onRememberMeChange = (event: CheckboxChangeEvent) => {
    setRememberMe(event.target.checked);
  };

  const onFinish = () => {
    setLoading(true);
    message.loading({ content: "Мы проверяем ваши данные...", key });
    performLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.data.access_token,
              expiresIn: res.data.expires_in,
              tokenType: "Bearer",
              authState: res.data.role,
            })
          ) {
            message.success({
              content: "Вы успешно вошли!",
              key,
              duration: 4,
            });
            history.push("/news");
          } else {
            throw Error;
          }
        }
      })
      .catch((error) => {
        message.error({
          content: "Произошла ошибка!",
          key,
          duration: 4,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = () => {};

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "3rem",
          backgroundColor: "var(--black)",
          fontFamily: "Teko",
        }}
      >
        <h3 style={{ color: "var(--white)", margin: 0 }}>IQhub</h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "4rem",
          backgroundColor: "var(--blue)",
          fontFamily: "Teko",
          boxShadow:
            "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
          padding: "0.4rem",
        }}
      >
        <h2 style={{ color: "var(--white)", margin: 0 }}>Markme.kz</h2>
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ backgroundColor: "white", padding: "2.5rem" }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваше имя пользователя!",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Введите ваш логин..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onEmailChange(event)
            }
            value={email}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваш пароль!",
            },
          ]}
        >
          <Input.Password
            placeholder="Введите ваш пароль..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onPasswordChange(event)
            }
            value={password}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox
            onChange={(event: CheckboxChangeEvent) => onRememberMeChange(event)}
            value={rememberMe}
          >
            Запомнить на этом устройстве
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", maxWidth: "80px" }}
          >
            {loading ? <LoadingOutlined /> : <span>Войти</span>}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
