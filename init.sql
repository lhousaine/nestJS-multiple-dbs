CREATE DATABASE IF NOT EXISTS posts_db;

GRANT ALL PRIVILEGES ON posts_db.* TO 'user'@'%';

GRANT ALL ON posts_db.* TO 'user'@'%';