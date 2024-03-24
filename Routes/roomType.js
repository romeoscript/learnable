const connectToDb = require('../lib/database');
const roomtypes = require('../models/roomType');

module.exports = {
    createRoomType: async (req, res) => {
        try {
            await connectToDb();

            const roomtype = new roomtypes({
                name: req.body.name,
            });
            await roomtype.save();
            res.send(roomtype);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    },
    getRoomTypes: async (req, res) => {
        try {
            await connectToDb();
            const roomTypes = await roomtypes.find({});
            res.send(roomTypes);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
};
