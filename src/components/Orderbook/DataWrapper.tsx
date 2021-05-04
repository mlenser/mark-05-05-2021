import React, { useEffect, useMemo, useRef } from 'react';
import useWebSocket from 'react-use-websocket';
import { connectionStatus } from '../../constants/websocket-states';

const socketUrl = 'wss://www.cryptofacilities.com/ws/v1';

const Orderbook: React.FC = () => {
  const messageHistory = useRef([]);

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    socketUrl,
    {
      reconnectAttempts: 10,
      reconnectInterval: 3000,
      // will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: () => true,
    },
  );

  messageHistory.current = useMemo(() => {
    if (lastJsonMessage) {
      return messageHistory.current.concat(lastJsonMessage);
    }
    return [];
  }, [lastJsonMessage]);

  useEffect(() => {
    /*
    sendJsonMessage({
      event: 'subscribe',
      feed: 'book_ui_1',
      product_ids: ['PI_XBTUSD'],
    });
     */
  }, []);

  console.log('messageHistory.current', messageHistory.current);

  return (
    <div>
      <div>Status: {connectionStatus[readyState]}.</div>
      <ul>
        {messageHistory.current?.map((message) => (
          <li key={JSON.stringify(message)}>{JSON.stringify(message)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orderbook;
