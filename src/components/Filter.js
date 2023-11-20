import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/actions'

export default function Filter() {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  const handleSetFilter = (selectedFilter) => {
    dispatch(setFilter(selectedFilter))
  }

  return (
    <div className="mb-3">
      <select className="form-control" value={filter} onChange={(e) => handleSetFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
    </div>
  )
}
