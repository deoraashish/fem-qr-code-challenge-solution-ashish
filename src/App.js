import './App.css';
import qrCode from './images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="qrCodeImage">
          <img src={qrCode} alt="The QR Code of the challenge" />
        </div>
        <div className="imageCaptionBold">
          Improve your front-end skills by building projects
        </div>
        <div className="imageCaptionMuted">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="www.ashishdeora.in">Ashish Deora</a>.
      </div>
    </div>
  );
}

export default App;
