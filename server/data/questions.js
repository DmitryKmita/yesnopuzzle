var comments = require('../data/comments');

var getComments = function(id) {
  var records = [];
  comments.forEach(function(comment) {
    if (comment.question == id) {
      records.push(comment.id);
    }
  });
  return records;
};

var questions = [];

questions.push({
  "id": 1,
  "title": "Man & Stairs",
  "description": "A man lives on the twelfth floor of an apartment building. Every morning he takes the elevator down to the lobby and leaves the building. In the evening, he gets into the elevator, and, if there is someone else in the elevator -- or if it was raining that day -- he goes back to his floor directly. Otherwise, he goes to the tenth floor and walks up two flights of stairs to his apartment.",
  "answer": "The man is a dwarf. He can't reach the upper elevator buttons, but he can ask people to push them for him. He can also push them with his umbrella.",
  "author": 1,
  "comments": getComments(1),
  "createdOn": new Date()
});

questions.push({
  "id": 2,
  "title": "Yacht",
  "description": "In the middle of the ocean is a yacht. Several corpses are floating in the water nearby.",
  "answer": "A group of people were on an ocean voyage in a yacht. One day, they decided to go swimming -- they put on their swimsuits and dove off the side. They discovered belatedly that they have forgotten to put a ladder down the side of the yacht and were unable to climb back in, so they drowned.",
  "author": 1,
  "comments": getComments(2),
  "createdOn": new Date()
});

questions.push({
  "id": 3,
  "title": "Jewels",
  "description": "A man is lying dead in a room. There is a large pile of gold and jewels on the floor, a chandelier attached to the ceiling, and a large open window.",
  "answer": "The room is the ballroom of an ocean liner which sank some time ago. The man ran out of air while diving in the wreck.",
  "author": 2,
  "comments": getComments(3),
  "createdOn": new Date()
});

questions.push({
  "id": 4,
  "title": "Man & Wife",
  "description": "A man and his wife raced through the streets. They stopped, and the husband got out of the car. When he came back, his wife was dead, and there was a stranger in the car.",
  "answer": "The wife was about to have a baby. They drove to the hospital. The husband left to get a wheelchair, but the baby was born in the meantime, and the wife didn't survive the birth.",
  "author": 2,
  "comments": getComments(4),
  "createdOn": new Date()
});

questions.push({
  "id": 5,
  "title": "Chicago park",
  "description": "A body is discovered in a park in Chicago in the middle of summer. It has a fractured skull and many other broken bones, but the cause of death was hypothermia.",
  "answer": "A poor peasant from somewhere in Europe desperately wants to come to the United States. Lacking money for airfare, he stows away in the landing gear compartment of a jet. He dies of hypothermia in mid-flight and falls out when the compartment opens as the plane makes its final approach.",
  "author": 2,
  "comments": getComments(5),
  "createdOn": new Date()
});

module.exports = questions;