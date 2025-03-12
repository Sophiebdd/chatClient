const WebSocket = require('ws');
const readline = require('readline');

const ws = new WebSocket('ws://192.168.1.141:3000'); 

ws.on('open', () => {
    console.log('✅ Connecté au serveur.');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('💬 Message: ');
    rl.prompt();

    rl.on('line', message => {
        ws.send(message);
        rl.prompt();
    });
});

ws.on('message', message => {
    console.log(`${message}`);
});

ws.on('close', () => {
    console.log('❌ Déconnecté du serveur.');
});
