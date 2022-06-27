import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
  return (
    <input 
    className="search-input" 
    value={searchValue}
    type="search" 
    onChange={handleChange}
    />
  )
}