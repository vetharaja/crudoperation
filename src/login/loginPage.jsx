import React, { useState } from 'react';
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';

const LoginPage = () => {

  const [user, setUser] = useState({});

  async function onFinish(params) {
    try {
      await setUser(params);
    }
    catch (ex) {
      console.log(ex);
    }
    finally {
      console.log(user);
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed::', errorInfo);
  };


  return <Row
    justify="center"
    align="middle"
    style={{ minHeight: "100vh" }}>
    <Col xs={22} sm={18} md={12} lg={8} xl={8}>
      <Card title="Login" hoverable>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" style={{ justifyItems: "right" }} >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </Col>
  </Row>
};
export default LoginPage;