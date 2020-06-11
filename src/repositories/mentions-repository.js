const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

exports.listMentions = async () => {
  const res = await Mentions.find({}, "Consultores");
  x=res["Consultor"][1]
  console.log(x._id)
  return res;
};

exports.createMention = async data => {
  const mention = new Mentions(data);
  await mention.save();
};

exports.deleteMention = async function () {
  await Mentions.findByIdAndDelete(req.params.id)
  return res.send("Excluida com sucesso")

};