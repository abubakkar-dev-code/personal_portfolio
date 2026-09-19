import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "SkillCategory",
    required: true,
  },
  order: {
    type: Number,
    default: 1,
  },
});
const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
