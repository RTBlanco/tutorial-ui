import './Overlay.css'


const Overlay = ({toggleOverlay}) => {
  return (
    <div id="overlay" onClick={toggleOverlay}></div>
  );
};

export default Overlay;