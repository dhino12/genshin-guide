import "./tab-item.js"

class TabIndicators extends HTMLElement {

    constructor() {
        super();
    }

    set tabs(tabsIcon) {
        this._tabsIcon = tabsIcon;
        console.log(`${this._tabsIcon} hello`);
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._tabsIcon.forEach(iconTab => {
            const tabItemElement = document.createElement("tab-item");
            tabItemElement.tab = iconTab;
            tabItemElement.setAttribute("class", "col-1 ms-2");
            this.appendChild(tabItemElement);
        });
    } 
}

customElements.define('tab-indicators', TabIndicators);