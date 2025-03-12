const WebSocket = require('ws');

const server = new WebSocket.Server({ host: '192.168.1.141', port: 3000 });

server.on('connection', socket => {
    console.log(`✅ Un client s'est connecté.`);

    socket.on('message', message => {
        console.log(` ${message}`);

        // Réenvoyer le message à tous les clients connectés
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        console.log(`❌ Un client s'est déconnecté.`);
    });
});

console.log('🖥️ Serveur WebSocket démarré sur ws://192.168.1.141:3000');