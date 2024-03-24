const express = require('express');
const app = express();
const port = 3000;
const roomTypes = require('./Routes/roomType')
const room = require('./Routes/room')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
    res.send('Hello World!');
});
app.post('/api/v1/room-types', roomTypes.createRoomType);
app.get('/api/v1/room-types', roomTypes.getRoomTypes);
app.post('/api/v1/rooms', room.createRoom);
app.get('/api/v1/rooms', room.getAllRooms);
app.get('/api/v1/rooms/:roomId', room.getRoomById);
app.patch('/api/v1/rooms/:roomId', room.updateRoom);
app.delete('/api/v1/rooms/:roomId', room.deleteRoom);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);