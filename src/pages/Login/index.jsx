import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less'
import { Login } from '../../axios'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        Login(values).then(res => {
          console.log(res)
        })
      }
    });
  }

  // async componentWillMount() {
  //   const aaa = await Login()
  //   console.log(aaa)
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="components-form-demo-normal-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            Or <a href="">现在注册！</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm