CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  release_date TEXT,
  year INTEGER,
  runtime INTEGER,
  genre TEXT,
  plot TEXT,
  poster TEXT,
  imdb_id TEXT,
  omdb_rating REAL,
  is_canon BOOLEAN DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE collections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  parent_id INTEGER,
  FOREIGN KEY(parent_id) REFERENCES collections(id)
);

CREATE TABLE collection_movies (
  movie_id INTEGER,
  collection_id INTEGER,
  PRIMARY KEY (movie_id, collection_id),
  FOREIGN KEY(movie_id) REFERENCES movies(id),
  FOREIGN KEY(collection_id) REFERENCES collections(id)
);