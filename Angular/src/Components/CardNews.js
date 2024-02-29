class CardNews extends HTMLElement { //cardNews herda os elementos de HTML;
    constructor(){
        super(); // chamada ao construtor de quem ele ta herdanddo;
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build()); // open vem de abert para modificações exteriores;
        shadow.appendChild(this.styles()); // open vem de abert para modificações exteriores;
    }

    build(){
        //const tags of html
        const componentRoot = document.createElement('div');
        const cardLeft = document.createElement('div');
        const cardRight = document.createElement('div');

        const auth = document.createElement('span');
        const linkTitle = document.createElement('a');
        const newsContent = document.createElement('p');

        const newsImage = document.createElement('img');

        //props of tags
        componentRoot.setAttribute('class', 'card');
        cardLeft.setAttribute('class', 'card_left');
        cardRight.setAttribute('class', 'card_right');

        //content on tag
        auth.textContent = "By " + (this.getAttribute('auth') || "Anonymous");
        linkTitle.textContent = this.getAttribute('title') || "New whitout title.";
        newsContent.textContent = this.getAttribute('content') || "News without description or content."

        linkTitle.href = this.getAttribute('url') || '#';

        newsImage.src = this.getAttribute('img') || "assests/defaulty-image.png";
        newsImage.alt = 'News photo';
        //appending 'childrens' on shadow tree
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(auth);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);

        return componentRoot;
    }
    
    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .card {
            width: 80%;
            display: flex;
            flex-direction: row;
            box-shadow: 0px 4px 13px #626262;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            padding-right: 15px;
        }
        
        .card_left span{
            font-weight: 500;
        }
        
        .card_left a{
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: 700;
        }
        
        .card_left p{
            color: rgb(66, 66, 66);
        }

        .card_right{
            display: flex;
        }

        .card_right img{
            width: 10rem;
            margin: 7px;
        }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews); // define um nome para a nova tag criada e de qual class vai herdar seus atributos;