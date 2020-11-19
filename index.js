const express = require('express');

//Crear servidor express
const app = express();

//rutas
app.get('/', (req, res) => {
    console.log('Se recibió una petición en /');
    res.json({
        ok: true,
        msg: "Recibido"
    });
    
}
);

//Configuración del puerto

app.listen(4000, () => {
    console.log(`Backend corriendo en el puerto ${4000}`);
})