import React, { useContext, useState } from "react";
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UserConText from "../Context/UserContext";
import { Navigate } from 'react-router-dom';
import {toast} from "react-toastify";

const Signin = () => {

    const auth = getAuth();

    const context = useContext(UserConText);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                console.log(res);
                context.setUser({email: res.user.email, uid: res.user.uid});
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.code, errorMessage);
                toast(errorMessage, {
                    type: "error"
                });
                // ..
            });

    }

    const handleFormSubmit = e => {
        e.preventDefault();
        handleSignUp();
    }

    if(context.user?.uid){
        return <Navigate to="/"/>
    }

    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleFormSubmit}>
							<CardHeader className=''>SignIn here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Signin;