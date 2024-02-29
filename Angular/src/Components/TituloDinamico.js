class DinamicTitle extends HTMLElement { //cardNews herda os elementos de HTML;
    constructor(){
        super(); // chamada ao construtor de quem ele ta herdanddo;
    
        const shadow = this.attachShadow({mode: "open"}); // open vem de abert para modificações exteriores;
       
        const documentRoot = document.createElement('h1');
        documentRoot.textContent = this.getAttribute('title');

        // documentRoot.textContent = 'Ronald'; "saida" pre definida

        const style = document.createElement('style');
        style.textContent = `
        h1{
            color: blue;
        }
        `;//criado para adicionar

        shadow.appendChild(documentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('dinamic-title', DinamicTitle); // define um nome para a nova tag criada e de qual class vai herdar seus atributos;