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

    await mongoose.connect(process.env.MONGO_URL|| '');
    mongoConnection.isConnected = 1;
    console.log('conectado a mongodb', process.env.MONGO_URL);
    
}

export const disconnect = async () => {

    if (process.env.NODE_ENV === 'development') return;

    if (mongoConnection.isConnected === 0) return;
    
    await mongoose.disconnect();
    mongoConnection.isConnected = 0

    console.log('Desconectado de MongoDB');
}







// _______Referencia en documentacion_________

// import { Schema, model, connect } from 'mongoose';

// // 1. Create an interface representing a document in MongoDB.
// interface IUser {
//   name: string;
//   email: string;
//   avatar?: string;
// }

// // 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: String
// });

// // 3. Create a Model.
// const User = model<IUser>('User', userSchema);

// run().catch(err => console.log(err));

// async function run() {
//   // 4. Connect to MongoDB
//   await connect('mongodb://127.0.0.1:27017/test');

//   const user = new User({
//     name: 'Bill',
//     email: 'bill@initech.com',
//     avatar: 'https://i.imgur.com/dM7Thhn.png'
//   });
//   await user.save();

//   console.log(user.email); // 'bill@initech.com'
// }