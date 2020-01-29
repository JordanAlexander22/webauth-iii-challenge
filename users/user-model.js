const db = require("../db-config");

const findUser = () => {
  return db("users").select("id", "username", "department");
};

const findById = id => {
  return db("users")
    .select("id", "username", "department")
    .where({ id })
    .first();
};

const findBy = filter => {
  return db("users")
    .select("id", "username", "department", "password")
    .where(filter);
};

const add = async user => {
  const ids = await db("users").insert(user);
  const [id] = ids;
  return findById(id);
};

module.exports = { findUser, findById, findBy, add };
