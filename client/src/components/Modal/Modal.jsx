import "./Modal.css";

const Modal = () => {
  
 
  return (
    <div className="modal">
      <div className="container">
        <div className="topSection">
          <h1>Latest Trends</h1>
          <br />
          <div className="imageSuggestion">
            <img src="/images/nft-illustration.png" />
            <br />
            <p>sub para</p>
          </div>
        </div>
        <div className="downSection">
          <h1>suggestions</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
