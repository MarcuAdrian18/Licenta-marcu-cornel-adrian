import "./loading-capybara.css";
import loadingGif from "../assets/capyloading.gif";

const LoadingCapy = () => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <img src={loadingGif} alt="wait until the page loads" />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingCapy;
