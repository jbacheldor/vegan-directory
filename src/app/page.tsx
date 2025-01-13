import RecipeCard from "./components/Cards/RecipeCard";

const Home: React.FC = () => {

  return (
    <>
    <div id='recipeOfDay'>
      <span id='title'>Recipe of the Day!</span>
      <RecipeCard/>
    </div>
    </>
  );
}

export default Home;