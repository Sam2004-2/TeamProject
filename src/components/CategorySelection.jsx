// CategorySelection.jsx
import PropTypes from "prop-types";

const categories = [
  { name: "My History and Profile", icon: "src/assets/placeholder.jpg"},
  { name: "How To Talk To Me", icon: "src/assets/placeholder.jpg"},
  { name: "My Planning Team", icon: "src/assets/placeholder.jpg"},
  { name: "Things I Like To Do", icon: "src/assets/placeholder.jpg"},
  { name: "Good Things People Say", icon: "src/assets/placeholder.jpg"},
  { name: "My Skills", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 1", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 2", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 3", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 4", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 5", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 6", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 7", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 8", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 9", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 10", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 11", icon: "src/assets/placeholder.jpg"},
  { name: "Placeholder 12", icon: "src/assets/placeholder.jpg"},
];

const CategorySelection = ({ onSelectCategory }) => {
  return (
    <div className="category-container">
      <div className="category-grid">
        {categories.map((category) => (
          <button
            key={category.name}
            className="category-button"
            onClick={() => onSelectCategory(category.name)}
          >
            {category.icon && (
              <img
                src={category.icon}
                className="category-icon"
              />
            )}
            <span className="category-name">{category.name}</span>
            {category.icon && <span className="icon"></span>}
          </button>
        ))}
      </div>
    </div>
  );
};

CategorySelection.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategorySelection;
