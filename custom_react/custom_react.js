const container=document.querySelector('#root')
//here I have created a react component and have to render in react app
const reactcomponent={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google page'
}
rendercustom(reactcomponent,container)
// here I am passing the element I want to insert and where I have to insert
function rendercustom(component,container){
    const element=document.createElement(component.type) // If I want to create a p tag I write p but here I want to react element so passing its type
    element.innerHTML=reactcomponent.children
    // element.setAttribute('href',reactcomponent.props.href)
    // element.setAttribute('target',reactcomponent.props.target)
    // if there s a third attribute we add it again by the same way but it is so repitive so we will done it by loop
    for (prop in reactcomponent.props){
        if (prop === 'childern'){
            continue; //skip
        }
        element.setAttribute(prop,reactcomponent.props[prop])

    }
    container.appendChild(element)
}