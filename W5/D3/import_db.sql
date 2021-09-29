PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  users_id INTEGER NOT NULL,
  questions_id INTEGER NOT NULL,

  FOREIGN KEY (users_id) REFERENCES users(id),
  FOREIGN KEY (questions_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  reply TEXT NOT NULL,
  parent_reply_id INTEGER,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO 
  users (fname, lname)
VALUES
  ('Travis',  'Scott');

INSERT INTO
  questions (title, body, user_id)
VALUES
('Question Subject', 'How are you', (SELECT id FROM users WHERE fname = 'Travis'));

INSERT INTO 
replies (reply, parent_reply_id, question_id, user_id)
VALUES
('I am good', NULL, (SELECT id FROM questions WHERE body = 'How are you'), (SELECT id FROM users WHERE fname = 'Travis'));

INSERT INTO
question_follows (users_id, questions_id)
VALUES
((SELECT id FROM users WHERE fname = 'Travis'), (SELECT id FROM questions WHERE body = 'How are you'));

INSERT INTO 
question_likes (user_id, question_id)
VALUES
((SELECT id FROM users WHERE fname = 'Travis'), (SELECT id FROM questions WHERE body = 'How are you'));


