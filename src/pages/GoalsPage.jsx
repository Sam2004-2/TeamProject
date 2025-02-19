// GoalsPage.jsx
import { useParams, useNavigate } from "react-router-dom";

const GoalsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Here you would load the detailed goals for the category
  // For now, let's just display a simple message.
  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        &larr; Back
      </button>
      <h1>{category} - Detailed Goals</h1>
      <p>This page will show all goals for the {category} category.</p>
    </div>
  );
};

export default GoalsPage;
