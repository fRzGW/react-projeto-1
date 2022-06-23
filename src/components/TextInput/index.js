import './styles.css'

export const TextIpunt = ({searchValue, handleChange}) => {
  return (
    <input 
    className="search-input" 
    value={searchValue}
    type="search" 
    onChange={handleChange}
    />
  )
}