const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
