import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filters/slice";

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <>
      <h3>Filter contacts</h3>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </>
  );
};

export default FilterContacts;
