class Form extends HTMLElement{
    constructor(){
        super()
        this.render()
    }
    render(){
        this.innerHTML=`
        <form id="note-form">
            <input type="text" id="title" placeholder="Judul catatan" required>
            <textarea id="body" placeholder="Isi catatan" required></textarea>
            <input type="submit" value="Tambahkan Catatan" id="button"></input>
        </form>
        `
    }
}
customElements.define('main-form', Form)