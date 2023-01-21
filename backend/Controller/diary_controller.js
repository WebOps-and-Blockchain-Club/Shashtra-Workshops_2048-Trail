const Diary = require("../Model/dairy");
const User = require("../Model/user");

module.exports.add_entry = async (req, res) => {
  console.log("here ");
  const user = await User.findOne({ id: req.decodedId });
  console.log("h1", user, "h1");
  if (!user)
    return res.status(401).send({
      message: "Unauthorized!" + e,
      entryCreated: null,
    });
  await Diary.create({
    date: req.body.date,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
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
      let enteries = user.diary;
      if (req.body.search) {
        enteries = enteries.filter((entry) => {
          JSON.stringify(entry).includes(req.body.search);
        });
      }
      return res.status(200).send({
        message: "Entries retrieved successfully!",
        entriesRetrived: enteries,
      });
    })
    .catch((e) => {
      return res.status(500).send({
        message: "Error retrieving entries: " + e,
        entriesRetrived: null,
      });
    });
};
