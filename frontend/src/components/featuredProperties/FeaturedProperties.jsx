import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("");

  return (
    <div className="fp">
      <div className="fpItem">
        <img src="" alt="" className="fpImg" />
        <span className="fpName">Aparthodel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="" alt="" className="fpImg" />
        <span className="fpName">Aparthodel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="" alt="" className="fpImg" />
        <span className="fpName">Aparthodel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="" alt="" className="fpImg" />
        <span className="fpName">Aparthodel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties;