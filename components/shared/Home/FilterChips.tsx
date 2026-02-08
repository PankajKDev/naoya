function FilterChips() {
  return (
    <div className="w-full overflow-x-auto flex justify-center pb-2 scrollbar-hide">
      <div className="flex gap-3 w-[80%] md:min-w-max">
        <button className="chip-btn">All</button>
        <button className="chip-btn">Youtube</button>
        <button className="chip-btn">Movies</button>
        <button className="chip-btn">Anime</button>
        <button className="chip-btn">Music</button>
      </div>
    </div>
  );
}

export default FilterChips;
