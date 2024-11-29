import mongoose from 'mongoose';

/*
* 0 = disconnected
* 1 = connected
* 2 = connecting
* 3 = disconnecting
*/

const mongoConnection = {
    isConnected: 0
}


export const connect = async () => {
    try {
        if (mongoConnection.isConnected) {
            console.log('ya estabamos conectados');
            return;
        }

        if (mongoose.connections.length > 0) {
            mongoConnection.isConnected = mongoose.connections[0].readyState;

            if (mongoConnection.isConnected === 1) {
                console.log('Usando conexión');
                return;
            }

            await mongoose.disconnect();
        }

        await mongoose.connect(process.env.MONGO_URL || '');
        mongoConnection.isConnected = 1;
        console.log('Conectado a MongoDB', process.env.MONGO_URL);
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        throw new Error('No se pudo conectar a MongoDB');
    }
    
}

export const disconnect = async () => {

    if (process.env.NODE_ENV === 'development') return;

    if (mongoConnection.isConnected === 0) return;

    // Evitar desconectar frecuentemente en producción
    if (mongoose.connection.readyState !== 1) return;
    
    await mongoose.disconnect();
    mongoConnection.isConnected = 0

    console.log('Desconectado de MongoDB');
}
