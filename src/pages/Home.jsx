// Home.jsx
import CategorySelection from "../components/CategorySelection";

const Home = () => {
  const handleCategorySelect = (category) => {
    console.log("Selected Category:", category);
  };

  return (
    <div>
      <CategorySelection onSelectCategory={handleCategorySelect} />
    </div>
  );
};

export default Home;
