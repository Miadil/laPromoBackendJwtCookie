const db = require("./db");

const findOne = async (id) => {
  try {
    const [user] = await db.query("select * from `user` where id = ?", [id]);
    return user;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { findOne };
