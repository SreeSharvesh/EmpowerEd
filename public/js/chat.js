document.addEventListener("DOMContentLoaded", () => {
    const socket = io(); // Initialize a socket connection to the server
  
    const messageForm = document.querySelector(".p2 input");
    const submitButton = document.querySelector(".p3 .submit");
    const messageList = document.querySelector(".div3");
  
    // Handle sending messages
    submitButton.addEventListener("click", () => {
      const message = messageForm.value.trim();
      if (message !== "") {
        // Emit the message to the server
        socket.emit("chat message", message);
  
        // Clear the input field
        messageForm.value = "";
      }
    });
  
    // Handle receiving messages
    socket.on("chat message", (message) => {
      const messageElement = document.createElement("div");
      messageElement.textContent = message;
      messageList.appendChild(messageElement);
    });
  });
  