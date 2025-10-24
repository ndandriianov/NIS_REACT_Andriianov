import IsFavoriteIcon from "./components/isFavourite/IsFavoriteIcon.tsx";

function App() {
  return (
    <>
      <IsFavoriteIcon isFavourite={true}/>
      <IsFavoriteIcon isFavourite={false}/>
    </>
  )
}

export default App
