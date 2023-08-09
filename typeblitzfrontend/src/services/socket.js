import io from 'socket.io-client';

export const socket = io('/', {
    autoConnect: false,
    withCredentials: true,
});

export const connectSocket = () => {
    socket.connect();
};

export const disconnectSocket = () => {
    socket.disconnect();
};