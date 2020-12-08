import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

type PropsFromSidebar = {
    closeModal: any
}

export default function NewConversationModal({ closeModal }: PropsFromSidebar) {

    function handleSubmit(e: any) {
        e.preventDefault()

        closeModal()
    }

    return (
        <Modal.Body>
            <Form onSubmit={handleSubmit}>

                <Button type='submit'></Button>
            </Form>
        </Modal.Body>
    )
}
