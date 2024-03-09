import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

type Props = {
    joinChatRoom: any
}

const WaitingRoom = ({ joinChatRoom }: Props) => {

    const [username, setUsername] = useState();
    const [chatRoom, setCharRoom] = useState();

    return <Form onSubmit={e => {
        e.preventDefault();
        joinChatRoom(username, chatRoom);
    }}>
        <Row className='px-5 py-5'>
            <Col sm={12}>
                <Form.Control placeholder='Username'
                    onChange={(e: any) => setUsername(e.target.value)} />
                <Form.Control placeholder='ChatRoom'
                    onChange={(e: any) => setCharRoom(e.target.value)} />
            </Col>
            <Col sm={12}>
                <hr />
                <Button variant='success' type='submit'>Join</Button>
            </Col>
        </Row>
    </Form>

}

export default WaitingRoom