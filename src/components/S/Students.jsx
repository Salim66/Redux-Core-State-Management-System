import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setInputFields } from '../../redux/actions/studentActions';

const Students = () => {

    let { name, age, skill } = useSelector(state => state.studentInput.inputFields);
    const dispatch = useDispatch();

  return (
    <>
        <Container className='my-5'>
            <Row className='justify-content-center'>
                <Col md={ 5 }>
                    <Card className='shadow'>
                        <Card.Body>
                            <Form>
                                <Form.Group className='my-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control value={ name } onChange={ e => dispatch(setInputFields({ name : e.target.value })) }></Form.Control>
                                </Form.Group>
                                <Form.Group className='my-3'>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control value={ age } onChange={ e => dispatch(setInputFields({ age : e.target.value })) }></Form.Control>
                                </Form.Group>
                                <Form.Group className='my-3'>
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control value={ skill } onChange={ e => dispatch(setInputFields({ skill : e.target.value })) }></Form.Control>
                                </Form.Group>
                                <Form.Group className='my-3'>
                                    <Button type='submit' variant='primary'>Add new</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            Name : { name } | Age : { age } | Skill : { skill } 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
};

export default Students;