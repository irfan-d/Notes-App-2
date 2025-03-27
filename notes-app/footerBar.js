class Footer extends HTMLElement{
    constructor(){
        super();
        this.render()
    }
    render(){
        this.innerHTML=`
        <footer>
            <p>&copy; 2025 MyCompanie</p>
        </footer>
        `
    }
}

customElements.define('footer-bar', Footer)