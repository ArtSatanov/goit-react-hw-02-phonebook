export const FilterBar = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
      ></input>
    </div>
  );
};
