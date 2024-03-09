import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'

type Props = {
    messages: any,
    sendMessage: any
}

const ChatRoom = ({ messages, sendMessage }: Props) => {
    return (
        <div>
            <Row className='px-5 py-5'>
                <Col sm={10}>
                    <h2>ChatRoom</h2>
                </Col>
                <Col>

                </Col>
            </Row>
            <Row className='px-5 py-5'>
                <Col sm={12}>
                    <MessageContainer messages={messages} />
                </Col>
                <Col sm={12}>
                    <SendMessageForm sendMessage={sendMessage} />
                </Col>
            </Row>
        </div>
    )
}

export default ChatRoom