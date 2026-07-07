const container = document.getElementById('root');

let customElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:"Click Me, Visit GOOGLE"
}

function customRender(element,container){
    const {type,props,children}=element;
    const domElement=document.createElement(type);
    for(const prop in props){
        domElement[prop]=props[prop];
    }
    domElement.textContent=children;
    container.appendChild(domElement);
}

customRender(customElement,container);

