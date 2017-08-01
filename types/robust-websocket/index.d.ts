// Type definitions for robust-websocket 0.2
// Project: https://github.com/appuri/robust-websocket#readme
// Definitions by: Tony Lee <https://github.com/hktonylee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'robust-websocket' {

    type Listener<K extends keyof WebSocketEventMap> = (this: WebSocket, ev: WebSocketEventMap[K]) => any;
    type ShouldReconnectFunc = (event: Event, websocket: RobustWebSocket) => number;

    interface UserOptions {
        timeout: number;
        shouldReconnect: ShouldReconnectFunc;
        automaticOpen: true;
    }

    interface RobustWebSocket {
        binaryType: string;

        readonly bufferedAmount: number;
        readonly extensions: string;
        readonly protocol: string;
        readonly readyState: number;
        readonly url: string;
        readonly CLOSED: number;
        readonly CLOSING: number;
        readonly CONNECTING: number;
        readonly OPEN: number;

        onclose: (this: WebSocket, ev: CloseEvent) => any;
        onerror: (this: WebSocket, ev: Event) => any;
        onmessage: (this: WebSocket, ev: MessageEvent) => any;
        onopen: (this: WebSocket, ev: Event) => any;

        close(code?: number, reason?: string): void;
        open(): void;
        send(data: any): void;

        // Copied and modified from lib.es6.d.ts
        addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: Listener<K>): void;
        removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: Listener<K>): void;
        dispatchEvent(evt: Event): boolean;

    }

    const RobustWebSocket: {
        prototype: RobustWebSocket;

        new(url: string,
            protocols?: string | string[],
            userOptions?: UserOptions | ShouldReconnectFunc): RobustWebSocket;
    };

    export = RobustWebSocket;

}



