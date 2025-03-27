class Navigasi extends HTMLElement{
    constructor(){
        super()
        this.render()
    }
    render(){
        this.innerHTML=`
            <nav>
                <img src="/assets/notepad.png">
                <h2>NotesApp</h2>
            </nav>
        `
    }
}

customElements.define('nav-bar', Navigasi)