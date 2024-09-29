let videoElement = document.getElementById('video-stream');
let connectButton = document.getElementById('connect-button');
let disconnectButton = document.getElementById('disconnect-button');

let streamUrl = '';
let mediaStream = null;

// Função para conectar ao servidor Flask e iniciar o streaming
function connect() {
    let serverUrl = document.getElementById('server-url').value;
    let serverPort = document.getElementById('server-port').value;

    // Verifica se a URL e porta estão preenchidas
    if (serverUrl === '' || serverPort === '') {
        alert('Insira a URL e a porta do servidor.');
        return;
    }

    // Define a URL do stream
    streamUrl = `http://${serverUrl}:${serverPort}/video_feed`;

    // Configura o vídeo para receber o stream do servidor Flask
    videoElement.src = streamUrl;

    // Desabilita o botão "Ligar" e habilita o "Desligar"
    connectButton.disabled = true;
    disconnectButton.disabled = false;
}

// Função para desligar o stream
function disconnect() {
    videoElement.src = '';  // Para o vídeo
    mediaStream = null;

    // Habilita o botão "Ligar" e desabilita o "Desligar"
    connectButton.disabled = false;
    disconnectButton.disabled = true;
}

// Função para sair da página
function exit() {
    window.location.href = 'about:blank';  // Redireciona para uma página vazia
}
