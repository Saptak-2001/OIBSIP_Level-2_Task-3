import { useDispatch, useSelector } from "react-redux"
import { filterTodo, markAllComplete } from "../redux/Actions";


const FilterButton = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter));
    }
  return (
    <div className="flex space-x-4 items-center">
      <select value={currentFilter} onChange={(e) => handleFilter(e.target.value)} className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none">
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Pending</option>
      </select>

      <button onClick={() => dispatch(markAllComplete())} className="text-sm py-1 px-2 bg-cyan-500 text-white ml-2 rounded hover:bg-cyan-700 hover:text-gray-100">Mark All Completed</button>
    </div>
  )
}

export default FilterButton
