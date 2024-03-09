// import React from 'react'
// import { Table } from 'react-bootstrap';

// type Props = {
//     messages: any;
// }

// const MessageContainer = ({ messages }: Props) => {
//     console.log("Messages: ", messages)
//     return (
//         <div>
//             {
//                 messages.map((message: any, index: any) =>
//                     <table>
//                         <tr key={index}>
//                             <td>{message.message} - {message.username}</td>
//                         </tr>
//                     </table>
//                 )}
//         </div>
//     )
// }

// export default MessageContainer
import React from 'react';
import { Table } from 'react-bootstrap';

type Message = {
    message: string;
    username: string;
}

type Props = {
    messages: Message[];
}

const MessageContainer = ({ messages }: Props) => {
    return (
        <div>
            <Table striped bordered>
                <tbody>
                    {messages.map((message: Message, index: number) => (
                        <tr key={index}>
                            <td><span style={{ fontWeight: 'bold' }}>
                                {message.username}:&emsp;
                            </span>
                                {message.message.includes(':)') ? message.message.replace(':)', '🙂') : message.message}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default MessageContainer;
