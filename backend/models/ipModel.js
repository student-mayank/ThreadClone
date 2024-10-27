import mongoose from 'mongoose';

const ipSchema = new mongoose.Schema({
    ipAddress: [String],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional, if you want to associate with a user
    timestamp: { type: Date, default: Date.now },
});

const IpAddress = mongoose.model('IpAddress', ipSchema);

export default IpAddress;