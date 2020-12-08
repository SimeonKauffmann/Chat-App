import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

type PropsFromApp = {
    onIdSubmit: any
}

export default function Login({ onIdSubmit }: PropsFromApp) {


    const idRef: any = useRef()

    function handleSubmit(e: any) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function makeNewID() {
        onIdSubmit(uuidv4())
    }


    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type='text' ref={idRef} required />
                </Form.Group>
                <Button type='submit' className='mr-2'>Login</Button>
                <Button onClick={makeNewID} variant='secondary'>Create A New ID</Button>
            </Form>
        </Container>
    )
}
