import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Main content with top padding so it’s not hidden behind the navbar */}
      <div className="pt-16 container mx-auto px-4 py-6">
        <Home />
      </div>
    </div>
  );
}

export default App;
