class ButtonCount extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        let btnCnt = 0;

        this.shadowRoot.innerHTML = `<button id="btn">Times Clicked: ${btnCnt}</button>`;
        let customButton = this.shadowRoot.getElementById("btn");
        customButton.addEventListener("click", () => {
            customButton.textContent = `Times Clicked: ${++btnCnt}`;
        });
    }
}

customElements.define("button-count", ButtonCount);