import React from 'react';
import type { FormProps } from 'antd';
import { Alert, Button, Card, Form, Input } from 'antd';
import Link from 'antd/es/typography/Link';

type FieldType = {
    email?: string;
    password?: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    const [alert, setAlert] = React.useState<{
        type: 'success' | 'error';
        message: string;
        description: string;
    } | null>(null);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const savedUser = localStorage.getItem('user');

        if (!savedUser) {
            setAlert({
                type: 'success',
                message: 'Login Successful',
                description: 'You have successfully logged in. Redirecting to dashboard...',
            }); return;
        }

        try {
            const userData = JSON.parse(savedUser);
            if (userData.email === values.email && userData.password === values.password) {
                setAlert({
                    type: 'success',
                    message: 'Login Successful',
                    description: 'You have successfully logged in. Redirecting to dashboard...',
                });
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify({
                    email: userData.email,
                    loginTime: new Date().toISOString()
                }));

                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);
            } else {
                setAlert({
                    type: 'error',
                    message: 'Login Failed',
                    description: 'Invalid email or password. Please try again.',
                });
            }
        } catch (error) {
            setAlert({
                type: 'error',
                message: 'Error',
                description: 'Something went wrong. Please try again.',
            });
        }
    };


    return (
        <>
            {
                alert && (
                    <Alert
                        message={alert.message}
                        description={alert.description}
                        type={alert.type}
                        showIcon
                        style={{
                            position: 'fixed',
                            top: '20px',
                            right: '20px',
                            zIndex: 1000,
                            maxWidth: '400px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                    />
                )
            }
            <Card
                title="login account"
                style={{
                    maxWidth: 400,
                    margin: '50px auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    paddingTop: '20px'
                }}
                headStyle={{
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    borderBottom: 'none',
                }}
            >

                <Form
                    name="basic"
                    layout="vertical"
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Your email"
                        name="email"
                        required={false}
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { pattern: /^\S+@\S+$/i, message: 'Invalid email format' }
                        ]}
                    >
                        <Input
                            placeholder="name@company.com"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        required={false}
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="........"
                            size='large' />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Login an account
                        </Button>
                    </Form.Item>
                </Form>
                <div className='text-center'>
                    <span style={{ color: '#6B7280', fontSize: '14px' }}>
                        Already have an account? <Link href="/register" style={{ color: '#393533ff' }}>Register here</Link>
                    </span>
                </div>
            </Card>
        </>
    );
}

export default Login;