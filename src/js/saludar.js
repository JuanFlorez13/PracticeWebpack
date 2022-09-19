// import '../css/style.css'
import '../globalStyle.css'
import webpackImg from '../img/webpack.png'

export const saludar = (nombre) => {

    console.log(`Hola ${nombre}`);
    
    const h1 = document.createElement('h1');
    h1.textContent = `Hola ${nombre}`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = webpackImg;
    document.body.append(img);
}