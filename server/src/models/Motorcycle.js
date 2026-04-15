import mongoose from 'mongoose';

const { Schema } = mongoose;

const photoSchema = new Schema({
  url:     { type: String, required: true },
  caption: String,
  isCover: { type: Boolean, default: false }
});

const specSchema = new Schema({
  category: String,
  label:    String,
  value:    String
});

const buildEventSchema = new Schema({
  date:        String,
  milestone:   String,
  description: String,
  photoUrl:    String
});

const motorcycleSchema = new Schema({
  slug:   { type: String, unique: true, required: true },
  name:   { type: String, required: true },
  tagline: String,
  year:   Number,
  status: { type: String, enum: ['Complete', 'In Progress', 'Retired'], default: 'Complete' },

  photos: [photoSchema],

  specs: {
    frame:      [specSchema],
    engine:     [specSchema],
    suspension: [specSchema],
    brakes:     [specSchema],
    wheels:     [specSchema],
    dimensions: [specSchema]
  },

  buildTimeline:   [buildEventSchema],
  uniqueFeatures:  [{ title: String, description: String, iconEmoji: String }],

  ridingStyle: {
    terrain:     [String],
    rideType:    String,
    ergonomics:  String,
    description: String
  },

  accentColor: { type: String, default: '#8b5cf6' },
  order:       { type: Number, default: 0 }

}, { timestamps: true });

export default mongoose.model('Motorcycle', motorcycleSchema);
