// Home.jsx
import CategorySelection from "../components/CategorySelection";
import { NavigationBar } from "../components/NavigationBar";

const Home = () => {
  const handleCategorySelect = (category) => {
    console.log("Selected Category:", category);
  };

 return (
    <div>
      <NavigationBar/>
      <CategorySelection onSelectCategory={handleCategorySelect} />
    </div>
  );
};

export default Home;