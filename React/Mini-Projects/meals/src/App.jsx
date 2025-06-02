import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setItems(res.data.meals || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching meals:', err);
        setError('Failed to load meals. Please try again later.');
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="message">Loading meals...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error-container">
          <p className="message error">{error}</p>
          <button className="retry-btn" onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="app-container">
        <div className="empty-container">
          <p className="message">No seafood meals found.</p>
        </div>
      </div>
    );
  }

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <article key={idMeal} className="card" role="region" aria-labelledby={`meal-${idMeal}`}>
      <div className="card-image-container">
        <img 
          src={strMealThumb} 
          alt={`Image of ${strMeal}`} 
          loading="lazy" 
          className="card-image"
        />
      </div>
      <section className="card-content">
        <h3 id={`meal-${idMeal}`} className="meal-title">{strMeal}</h3>
        <p className="meal-id">#{idMeal}</p>
      </section>
    </article>
  ));

  return (
    <div className="app-container">
      <h1 className="app-title">Seafood Delights</h1>
      <div className="items-container" role="list">
        {itemList}
      </div>
    </div>
  );
}

export default App;