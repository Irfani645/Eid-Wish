function displayMessage() {
    var messageElement = document.getElementById("message");
    if (messageElement.classList.contains("hidden")) {
        messageElement.innerHTML = "May this special day brings peace, happiness, and prosperity to everyone. Eid Mubarak to you and your family! Irfan";
        messageElement.classList.remove("hidden");
    } else {
        messageElement.classList.add("hidden");
    }
}
