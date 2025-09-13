import React from 'react';
import type { FormProps } from 'antd';
import { Alert, Button, Card, Form, Input } from 'antd';
import Link from 'antd/es/typography/Link';

type FieldType = {
    email?: string;
    password?: string;
    confirmPassword?: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Register() {
    const [alert, setAlert] = React.useState<{
        type: 'success' | 'error';
        message: string;
        description: string;
    } | null>(null);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        localStorage.setItem('user', JSON.stringify(values));
        console.log('Success:', values);
        setAlert({
            type: 'success',
            message: 'Registration Successful',
            description: 'You have successfully registered. Redirecting to login...',
        });

        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
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
                title="Create account"
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

                    <Form.Item<FieldType>
                        label="Confirm Password"
                        name="confirmPassword"
                        required={false}
                        dependencies={['password']}
                        rules={[
                            {
                                required: true, message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Passwords do not match!'));
                                }
                            })
                        ]}
                    >
                        <Input.Password
                            placeholder="........"
                            size='large' />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Create an account
                        </Button>
                    </Form.Item>
                </Form>
                <div className='text-center'>
                    <span style={{ color: '#6B7280', fontSize: '14px' }}>
                        Already have an account? <Link href="/login" style={{ color: '#393533ff' }}>Log here</Link>
                    </span>
                </div>
            </Card>
        </>
    );
}

export default Register;