import { useGenres } from '@/hooks/useGenres'

const GameGenres = () => {
    const {genres} = useGenres();
    
  return (
    <div>
      {genres.map(genre=> <ul>
        <li key={genre.id}>{genre.name}</li>
      </ul>)}
    </div>
  )
}

export default GameGenres
