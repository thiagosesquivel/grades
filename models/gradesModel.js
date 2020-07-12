export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
    },
    lastModified: {
      type: Date,
    },
  });

  const Grades = mongoose.model("grades", gradesSchema, "grades");
  return Grades;
};
