import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CategoryDetails.css";

const categoryGoals = {
  "Introduction": [
    { title: "Learn the Basics", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "Overview of Concepts", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
  ],
  "Getting Ready": [
    { title: "My History and Profile", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "How to Talk to Me", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "My Planning Team", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "What Staff Do", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" }
  ],
  "Putting the Plan Together": [
    { title: "Draft Your Plan", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "Review and Adjust", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
  ],
  "Important to and Important for Me": [
    { title: "Identify Priorities", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "Define Your Values", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
  ],
  "My Goals": [
    { title: "Set Clear Objectives", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "Plan Milestones", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
  ],
  "Making it Happen": [
    { title: "Take Action", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
    { title: "Monitor Progress", image: "https://rubberstampsonline.com.sg/image/cache//products/stock_stamp/22-SAMPLE-900x900.jpg" },
  ],
};

const CategoryDetails = ({ category, onBack }) => {
  const goals = categoryGoals[category] || [];

  return (
    <div className="category-details-container">
      <button className="category-back-button" onClick={onBack}>
        &larr; Go Back
      </button>
      <h1 className="category-heading">{category}</h1>
      <div className="category-card-row">
        {goals.map((goal, index) => (
          <Link
            to={`/category/${encodeURIComponent(category)}/goals`}
            key={index}
            className="category-card-link"
          >
            <div className="category-card">
              <img
                src={goal.image}
                alt={goal.title}
                className="category-card-image"
              />
              <div className="category-card-body">
                <h5 className="category-card-title">{goal.title}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

CategoryDetails.propTypes = {
  category: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default CategoryDetails;
