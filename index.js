const express = require('express');
require('dotenv').config();
//Crear servidor express
const app = express();

console.log(process.env);

//Acceso al directorio público
app.use(express.static('public'));

//rutas
//app.get('/', (req, res) => {
    
    //res.json({
      //  ok: true,
      //  msg: "Recibido"
    // });
    
//}
//);

//Configuración del puerto

app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})