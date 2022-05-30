const { Vote } = require('../models');

const votedata = [
  {
    user_id: 10,
    post_id: 2
  },
  {
    user_id: 6,
    post_id: 1
  },
  {
    user_id: 5,
    post_id: 2
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
