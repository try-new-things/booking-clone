import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {

  const { data, loading, error } = useFetch("");

  return (
    <div className="featured">
      {loading ? (
        "로딩중 입니다."
      ) : (
        <>
          <div className="featuredItem">
            <img src="" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>123 preoperties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Featured;