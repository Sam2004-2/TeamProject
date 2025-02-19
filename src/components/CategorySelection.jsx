// CategorySelection.jsx
import PropTypes from "prop-types";

const categories = [
  { name: "Introduction", color: "category-introduction", icon: "🔗" },
  { name: "Getting Ready", color: "category-getting-ready", icon: "✅" },
  { name: "Putting the Plan Together", color: "category-putting-the-plan-together", icon: "🛠" },
  { name: "Important to and Important for Me", color: "category-important-to-and-important-for-me", icon: "💡" },
  { name: "My Goals", color: "category-my-goals", icon: "🏆" },
  { name: "Making it Happen", color: "category-making-it-happen", icon: "✈️" },
];

const CategorySelection = ({ onSelectCategory }) => {
  return (
    <div className="category-container">
      <div className="row">
        {categories.map((category) => (
          <div key={category.name} className="col-md-6">
            <button
              className={`btn w-100 category-button ${category.color}`}
              onClick={() => onSelectCategory(category.name)}
            >
              <span>{category.name}</span>
              <span className="icon">{category.icon}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

CategorySelection.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategorySelection;
