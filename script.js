let peerConnection;
let dataChannel;

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageText = messageInput.value;
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerText = messageText;
  messages.appendChild(message);
  dataChannel.send(messageText);
  messageInput.value = '';
});

function createPeerConnection() {
  peerConnection = new RTCPeerConnection();
  dataChannel = peerConnection.createDataChannel('chat');
  dataChannel.onmessage = (event) => {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = event.data;
    messages.appendChild(message);
  };
}

createPeerConnection();
