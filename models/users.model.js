const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "abu bakar siddik",
    email: "abs@gmail.com",
  },
  {
    id: uuidv4(),
    username: "tamim iqbal",
    email: "tamim@gmail.com",
  },
  {
    id: uuidv4(),
    username: "rafi",
    email: "rafi@gmail.com",
  },
  {
    id: uuidv4(),
    username: "roni",
    email: "roni@gmail.com",
  },
];

module.exports = users;
