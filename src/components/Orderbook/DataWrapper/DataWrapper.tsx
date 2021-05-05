import React, { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { useOrderbookContext } from '../OrderbookContext';
import { setData } from './setData';
import { adjustValues } from './adjustValues';

const socketUrl = 'wss://www.cryptofacilities.com/ws/v1';

const DataWrapper: React.FC = () => {
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl, {
    reconnectAttempts: 10,
    reconnectInterval: 3000,
    // will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: () => true,
  });
  const {
    asksValues,
    bidsValues,
    setAsksValues,
    setBidsValues,
  } = useOrderbookContext();

  useEffect(() => {
    sendJsonMessage({
      event: 'subscribe',
      feed: 'book_ui_1',
      product_ids: ['PI_XBTUSD'],
    });
  }, []);

  useEffect(() => {
    const { asks, bids, feed } = lastJsonMessage || {};
    if (feed === 'book_ui_1_snapshot') {
      setData({ asks, bids, setAsksValues, setBidsValues });
    }
    if (feed === 'book_ui_1') {
      adjustValues({
        asks,
        asksValues,
        bids,
        bidsValues,
        setAsksValues,
        setBidsValues,
      });
    }
  }, [lastJsonMessage]);

  return null;
};

export default DataWrapper;
