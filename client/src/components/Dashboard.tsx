import React from 'react'
import Sidebar from './Sidebar'

type PropsFromApp = {
    id: string
}

export default function Dashboard({ id }: PropsFromApp) {
    return (
        <div className='d-flex' style={{ height: '100vh' }}>
            <Sidebar id={id} />
        </div>
    )
}

