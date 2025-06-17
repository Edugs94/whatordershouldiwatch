type Movie = {
  title: string;
  releaseDate: string; // formato YYYY-MM-DD
};

const movies: Movie[] = [
  { title: "Iron Man", releaseDate: "2008-05-02" },
  { title: "The Incredible Hulk", releaseDate: "2008-06-13" },
  { title: "Iron Man 2", releaseDate: "2010-05-07" },
  { title: "Thor", releaseDate: "2011-05-06" },
  { title: "Captain America: The First Avenger", releaseDate: "2011-07-22" },
];

export function getReleaseOrder(movies: Movie[]): string[] {
  return movies
    .sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime())
    .map((m) => `${m.title} (${new Date(m.releaseDate).getFullYear()})`);
}
