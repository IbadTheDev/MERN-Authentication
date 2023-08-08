import { useState } from "react";
import { Link } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

import React from 'react'

const LoginScreen = () => {
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }

  return (
    <FormContainer>
        <h1>Sign In</h1>

        <Form onsubmit={ submitHandler }>
            <Form.Group className='my-2' controlID='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlID='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={ email }
                    onChange={ (e) => setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type='submit' varient='primary' className='mt-3'>
                Sing In
            </Button>

            <Row className='py-3'>
                <Col>
                New Customer? <Link to='/register'>Register</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default LoginScreen
