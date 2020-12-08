import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider'

interface Contact {
    id: string,
    name: string
}

export default function Contacts() {

    const { contacts }: any = useContacts()

    return (
        <ListGroup variant='flush'>
            {contacts.map((contact: Contact) => (
                <ListGroup.Item key={contact.id}>
                    {contact.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
