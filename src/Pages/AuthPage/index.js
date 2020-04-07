import React from "react";
import { Card, Form, Input, Button } from "antd";
import "antd/dist/antd.css";

import { Container } from "./styles";

export default function AuthPage() {
  return (
    <Container>
      <Card className={["w100", "m-w400"]}>
        <h2>CARD BOLADÃO</h2>
        <Form
          onFinish={(values) => console.log(values)}
          onFinishFailed={(error) => console.log(error)}
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
            <Input autoComplete={false} autoCapitalize={true} />
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
            <Input.Password autoComplete={false} autoCapitalize={true} />
          </Form.Item>
          <Form.Item>
            <Button className="w100" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}
