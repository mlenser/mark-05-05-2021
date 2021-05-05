import React, { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { connectionStatus } from '../../constants/websocket-states';
import { useOrderbookContext } from './OrderbookContext';
import { SizePrice } from '../../types/SizePrice';

const socketUrl = 'wss://www.cryptofacilities.com/ws/v1';

const Orderbook: React.FC = () => {
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    socketUrl,
    {
      reconnectAttempts: 10,
      reconnectInterval: 3000,
      // will attempt to reconnect on all close events, such as server shutting down
      shouldReconnect: () => true,
    },
  );
  const { setAsksValues, setBidsValues } = useOrderbookContext();

  const setData = ({
    asks,
    bids,
  }: {
    asks: SizePrice[];
    bids: SizePrice[];
  }) => {
    if (asks) {
      setAsksValues(asks);
    }
    if (bids) {
      setBidsValues(bids);
    }
  };

  const replaceOrRemoveData = ({
    asks,
    bids,
  }: {
    asks: SizePrice[];
    bids: SizePrice[];
  }) => {
    console.log('data', asks, bids);
  };

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
      setData({ asks, bids });
    }
    if (feed === 'book_ui_1') {
      replaceOrRemoveData({ asks, bids });
    }
  }, [lastJsonMessage]);

  return <div>Websocket status: {connectionStatus[readyState]}</div>;
};

export default Orderbook;
