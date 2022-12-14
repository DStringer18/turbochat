import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    // on Start
    connect() {
        console.log("Connected");
        const messages = document.getElementById("messages");
        messages.addEventListener("DOMNodeInserted", this.resetScroll)
        this.resetScroll(messages);
    }

    // on stop
    disconnect() {
        console.log("Disconnected");
    }

    // custom function
    resetScroll(){
        messages.scrollTop = messages.scrollHeight - messages.clientHeight
    }
}
