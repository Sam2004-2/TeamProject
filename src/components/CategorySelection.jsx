import PropTypes from "prop-types";

const categories = [
  { name: "Introduction", color: "bg-purple-500", icon: "🔗" },
  { name: "Getting Ready", color: "bg-yellow-500", icon: "✅" },
  { name: "Putting the Plan Together", color: "bg-pink-500", icon: "🛠" },
  { name: "Important to and Important for Me", color: "bg-blue-500", icon: "💡" },
  { name: "My Goals", color: "bg-orange-500", icon: "🏆" },
  { name: "Making it Happen", color: "bg-green-500", icon: "✈️" },
];

const CategorySelection = ({ onSelectCategory }) => {
  return (
<div className="category-container">
  <h1>Select a Category</h1>
  <div className="category-grid">
    {categories.map((category) => (
      <button
        key={category.name}
        className={`category-button category-${category.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        onClick={() => onSelectCategory(category.name)}
      >
        <span>{category.name}</span>
        <span className="icon">{category.icon}</span>
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
