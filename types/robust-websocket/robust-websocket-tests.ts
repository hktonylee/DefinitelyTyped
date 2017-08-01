import * as RobustWebSocket from 'robust-websocket';

const websocket = new RobustWebSocket('ws://www.abc.com:123') as WebSocket;
websocket.CLOSED === WebSocket.CLOSED;
