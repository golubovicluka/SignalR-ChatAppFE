import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

type Props = {
    sendMessage: (message: string) => void
}

const SendMessageForm = ({ sendMessage }: Props) => {
    const [message, setMessage] = useState('');

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
            <InputGroup className='mb-3'>
                <InputGroup.Text>Chat</InputGroup.Text>
                <Form.Control onChange={e => setMessage(e.target.value.replace(':)', '🙂'))} value={message} placeholder="enter message..." />
                <Button variant='success' type='submit' disabled={!message}>Send</Button>
            </InputGroup>
        </Form>
    )
}

export default SendMessageForm