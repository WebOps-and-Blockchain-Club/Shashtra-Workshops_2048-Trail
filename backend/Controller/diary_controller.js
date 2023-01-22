const Diary = require("../Model/dairy");
const User = require("../Model/user");

module.exports.add_entry = async (req, res) => {
  const user = await User.findOne({ id: req.decodedId });
  const diary = await Diary.findOne({ date: req.body.date });
  if (diary) {
    return res.status(200).send({ message: "Entry already exists!" })
  };
  if (!user)
    return res.status(401).send({
      message: "Unauthorized!" + e,
      entryCreated: null,
    });
  await Diary.create({
    date: req.body.date,
    title: req.body.title,
    content: req.body.body,
    image: req.body.img,
    owner: user._id,
  })
    .then(async (entry) => {
      user.diary = user.diary.concat(entry._id);
      await user.save();
      return res
        .status(200)
        .send({ message: "Entry saved successfully!", entryCreated: entry });
    })
    .catch((e) => {
      return res
        .status(500)
        .send({ message: "Error saving entry: " + e, entryCreated: null });
    });
};

module.exports.get_entries = async (req, res) => {
  await User.findOne({ id: req.decodedId })
    .populate("diary")
    .then((user) => {
      let entry = user.diary;
      entry = entry.filter((entry) => entry.date === req.body.search);
      return res.status(200).send({
        message: "Entry retrieved successfully!",
        entryRetrived: entry,
      });
    })
    .catch((e) => {
      return res.status(500).send({
        message: "Error retrieving entries: " + e,
        entryRetrived: null,
      });
    });
};
