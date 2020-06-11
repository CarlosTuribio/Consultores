const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// list
exports.listMentions = async (req, res) => {
    try {
      const data = await Mentions.find({});
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as menções!'});
    }
  };

exports.deleteMention = async (req, res) => {
  await Mentions.findByIdAndDelete(req.params.id)
  return res.send("Excluida com sucesso")
};
// create
exports.createMention = async (req, res) => {
  try {
    const mention = new Mentions({
        Consultor: req.body.Consultor,
      mention: req.body.mention
    });

    await mention.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};