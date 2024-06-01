import { useEffect} from "react"
function App() {
 const [characters, setCharacters]= useState([])
useEffect(() => {
  async function fetchData(){
  const response = await fetch("https://rickandmortyapi.com/api/character")
  const data = await response.json()
  setCharacters(data.results);
}
fetchData()
},[])
return <div>
  <h1>rick and morty</h1>
  {
    characters.map(character =>{
      return (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name}/>
        </div>
    )
  })}
</div>
}
export default App