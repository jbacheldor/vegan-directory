import RecipeCard from "./components/Cards/RecipeCard";

const Home: React.FC = () => {

  return (
    <>
    <div id='recipeOfDay'>
      <span id='title'>Recipe of the Day!</span>
      <RecipeCard/>
      <hr/>
      <span>Soup should be tasted, not looked at - Stephen Downward</span>
      <span>100% of people that don't eat die, but also a 100% of people that eat die too so - Stephen Downward</span>
    </div>
    </>
  );
}

export default Home;