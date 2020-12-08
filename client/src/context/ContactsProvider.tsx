import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

type Props = {
    children: any
}

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }: Props) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    interface ContactObject {
        id: string,
        name: string
    }


    function createContact(id: string, name: string) {
        setContacts((prevContacts: [ContactObject]) => {
            return [...prevContacts, { id, name }]
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}
