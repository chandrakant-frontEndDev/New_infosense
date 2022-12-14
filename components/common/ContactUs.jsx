import React, {useState} from 'react'
import { Col, Container, Row, Form, Button, FloatingLabel } from 'react-bootstrap'
import { useForm } from "react-hook-form";

export default function ContactUs() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [btnLoader, setBtnLoader] = useState(false)
    const onSubmit = (data) => {

    }
    return (
        <>
            <section className='contactUs'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className='head'>
                                <h4>Get in Touch</h4>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='contact_form_wrapper'>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Name</Form.Label> */}
                                        <FloatingLabel controlId="floatingTextarea2" label="Name">
                                            <Form.Control type="text" placeholder="name"
                                                {...register("name", {
                                                    required: 'Name is Required',
                                                    minLength: {
                                                        value: 3,
                                                        message: "The minimum length for this field is 3 characters"
                                                    },
                                                    pattern: {
                                                        value: /\S\S+/g,
                                                        message: "field cannot be empty"
                                                    }
                                                })}
                                            />
                                             {errors.name && (
                                                <Form.Text className="text-muted">
                                                    <small className='text-danger'>{errors.name.message}</small>
                                                </Form.Text>
                                            )}
                                            {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Company Name</Form.Label> */}
                                        <FloatingLabel controlId="floatingTextarea2" label="Company email">
                                            <Form.Control type="text" placeholder="company name"
                                                {...register("companyName", {
                                                    required: 'Company Name is Required',
                                                    minLength: {
                                                        value: 3,
                                                        message: "The minimum length for this field is 3 characters"
                                                    },
                                                    pattern: {
                                                        value: /\S\S+/g,
                                                        message: "field cannot be empty"
                                                    }
                                                })}
                                            />
                                             {errors.companyName && (
                                                <Form.Text className="text-muted">
                                                    <small className='text-danger'>{errors.companyName.message}</small>
                                                </Form.Text>
                                            )}
                                            {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Business Email</Form.Label> */}
                                        <FloatingLabel controlId="floatingTextarea2" label="Business email">
                                            <Form.Control type="email" placeholder="Business email"
                                                {...register("businessEmail", {
                                                    required: 'Business Email is Required',
                                                    pattern: {
                                                        // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/ym,
                                                        message: "Invalid Email Address"
                                                    }
                                                })}
                                            />
                                            {errors.businessEmail && (
                                                <Form.Text className="text-muted">
                                                    <small className='text-danger'>{errors.businessEmail.message}</small>
                                                </Form.Text>
                                            )}
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <FloatingLabel controlId="floatingTextarea2" label="Phone">
                                            <Form.Control type="number" placeholder="Phone" 
                                             {...register("phone", {
                                                required: 'Valid Phone Number is Required',
                                                // minLength: {
                                                //     value: 3,
                                                //     message: "The minimum length for this field is 3 characters"
                                                // },
                                                pattern: {
                                                    value: /\S\S+/g,
                                                    message: "field cannot be empty"
                                                }
                                            })}
                                            />
                                            {errors.phone && (
                                                <Form.Text className="text-muted">
                                                    <small className='text-danger'>{errors.phone.message}</small>
                                                </Form.Text>
                                            )}
                                            {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                                        </FloatingLabel>
                                    </Form.Group>
                                    {/* <Form.Label>How we can help you?</Form.Label> */}
                                    <FloatingLabel controlId="floatingTextarea2" label="How we can help you?">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            {...register("message", {
                                                required: 'Message is Required',
                                                minLength: {
                                                    value: 3,
                                                    message: "The minimum length for this field is 3 characters"
                                                },
                                                pattern: {
                                                    value: /\S\S+/g,
                                                    message: "field cannot be empty"
                                                }
                                            })}
                                        />
                                        {errors.message && (
                                                <Form.Text className="text-muted">
                                                    <small className='text-danger'>{errors.message.message}</small>
                                                </Form.Text>
                                            )}
                                    </FloatingLabel>

                                    <Button variant="primary" type="submit" className='w-100 mt-4'>
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
