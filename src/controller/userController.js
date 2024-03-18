const { findOne } = require("../model/userModel");

const getOne = async (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(userId);
  try {
    if (isNaN(userId)) {
      throw new Error();
    }
    const [user] = await findOne(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { getOne };
