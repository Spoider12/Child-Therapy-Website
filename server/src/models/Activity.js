import mongoose from 'mongoose';
const activitySchema = new mongoose.Schema({
  action: { type: String, required: true },
  resource: { type: String, required: true },
  resourceId: String,
  actor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
export default mongoose.model('Activity', activitySchema);
