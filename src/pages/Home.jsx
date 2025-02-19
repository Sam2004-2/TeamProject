import { useState } from 'react';
import CategorySelection from "../components/CategorySelection";
import CategoryDetails from "../components/CategoryDetails";
import { NavigationBar } from '../components/NavigationBar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <NavigationBar />
      {selectedCategory ? (
        <CategoryDetails category={selectedCategory} onBack={handleBack} />
      ) : (
        <CategorySelection onSelectCategory={handleCategorySelect} />
      )}
    </div>
  );
};

export default Home;
