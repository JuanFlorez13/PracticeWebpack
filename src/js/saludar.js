// import '../css/style.css'
import '../globalStyle.css'

export const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
    const h1 = document.createElement('h1');
    h1.textContent = `Hola ${nombre}`;
    document.body.append(h1);
}