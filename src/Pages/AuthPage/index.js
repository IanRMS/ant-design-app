import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Input, Button, Modal } from "antd";
import "antd/dist/antd.css";

import { Container } from "./styles";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function error() {
    Modal.error({
      title: "Ops, algo deu errado",
      content:
        "Verifique se completou o formulário corretamente e tente novamente",
      okText: "Tentar novamente",
      okType: "danger",
    });
  }

  function signIn(values) {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      // error();
      setLoading(false);
      localStorage.setItem('@token', '123456789')
      history.push("/home");
    }, 2000);
  }

  return (
    <Container>
      <Card className={["w100", "m-w400"]}>
        <h2>CARD BOLADÃO</h2>
        <Form
          onFinish={(values) => signIn(values)}
          onFinishFailed={() => error()}
          name="loginForm"
          layout="vertical"
        >
          <Form.Item
            label="Nome de usuário"
            name="username"
            rules={[
              {
                required: true,
                message: "Insira o nome de seu usuário!",
              },
            ]}
          >
            <Input autoComplete="off" autoCapitalize="off" />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[
              {
                required: true,
                message: "Insira sua senha!",
              },
            ]}
          >
            <Input.Password autoComplete="off" autoCapitalize="off" />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={loading}
              className="w100"
              type="primary"
              htmlType="submit"
            >
              {loading ? "Carregando" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
