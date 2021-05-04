import React, { useState, useCallback, useMemo, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Button } from '@material-ui/core';

const Orderbook: React.FC = () => {
  const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const messageHistory = useRef([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  messageHistory.current = useMemo(() => {
    if (lastMessage) {
      // TODO fix type issue from dependency
      return messageHistory.current.concat(lastMessage);
    }
    return [];
  }, [lastMessage]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('wss://demos.kaazing.com/echo'),
    [],
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  console.log('messageHistory.current', messageHistory.current);

  return (
    <div>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleClickChangeSocketUrl}
      >
        Change Socket Url
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Send 'Hello'
      </Button>
      <div>The WebSocket is currently {connectionStatus}.</div>
      {lastMessage ? <div>Last message: {lastMessage.data}</div> : null}
      <ul>
        {messageHistory.current?.map((message, idx) => {
          // TODO fix type issue from dependency
          return <li key={idx}>{message.data}</li>;
        })}
      </ul>
    </div>
  );
};

export default Orderbook;
