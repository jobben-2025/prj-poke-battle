/*
In Neon, databases are stored on branches. By default, a project has one branch and one database.
You can select the branch and database to use from the drop-down menus above.

Try generating sample data and querying it by running the example statements below, or click
New Query to clear the editor.
CREATE TABLE IF NOT EXISTS leaderboard(id SERIAL PRIMARY KEY, name TEXT NOT NULL, value REAL);
INSERT INTO leaderboard(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM leaderboard;
*/

CREATE DATABASE leaderboard;
\c leaderboard;

-- Create the table
CREATE TABLE scores (
    _id SERIAL PRIMARY KEY, -- SERIAL automatically increments and makes it unique
    username VARCHAR(255) NOT NULL,
    score INTEGER NOT NULL, -- Assuming you want a whole number score
    date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  -- Uses the system's timezone, recommended for consistency
);

-- Optionally, add a comment to the table
-- COMMENT ON TABLE scores IS 'Stores high scores with username, score, and timestamp.';

-- Optionally, add comments to columns
-- COMMENT ON COLUMN scores._id IS 'Unique identifier for the score entry.';
-- COMMENT ON COLUMN scores.username IS 'Username of the player.';
-- COMMENT ON COLUMN scores.score IS 'Score achieved by the player.';
-- COMMENT ON COLUMN scores.date IS 'Timestamp of when the score was recorded.';

-- Example insert:
INSERT INTO scores (username, score) VALUES ('IamTheBest', 10);
INSERT INTO scores (username, score) VALUES ('PrettyPaula', 20);
INSERT INTO scores (username, score) VALUES ('Jason', 30);
INSERT INTO scores (username, score) VALUES ('Michael', 40);
INSERT INTO scores (username, score) VALUES ('John Wick', 50);
INSERT INTO scores (username, score) VALUES ('YouAreTheBest', 60);
