import express from 'express';

// 1) Creando una instancia de Express
const app = express();

// 2) Configurando el puerto en el que el servidor escuchara
const PORT = 3000;

// 3) Ruta basica
//Ruta GET con parametro de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`)
});

// 4) Iniciando el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})