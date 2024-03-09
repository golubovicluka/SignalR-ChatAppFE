import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import WaitingRoom from './components/WaitingRoom'
import { useState } from 'react';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';

function App() {
  const [connection, setConnection] = useState<HubConnection | undefined>(undefined);
  const [messages, setMessages] = useState<{ username: string, message: string }[]>([]);

  const joinChatRoom = async (username: string, chatRoom: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5285/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (username: string, message: string) => {
        console.log("Message: " + message);
      })

      conn.on("ReceiveSpecificMessage", (username: string, message: string) => {
        console.log("Message: " + message + " username " + username);
        setMessages(messages => [...messages, { username, message }]);
      })

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatRoom });

      setConnection(conn);

    } catch (e) {
      console.error(e);
    }
  }

  const sendMessage = async (message: any) => {
    try {
      if (connection) {
        await connection.invoke("SendMessage", message);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <main>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to simple chat app with SignalR</h1>
            </Col>
          </Row>
          {!connection
            ? <WaitingRoom joinChatRoom={joinChatRoom} />
            : <ChatRoom sendMessage={sendMessage} messages={messages} />
          }
        </Container>
      </main>
    </>
  )
}

export default App
