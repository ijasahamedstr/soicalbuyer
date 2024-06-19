import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './Topbar.css';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  const mystyle = {
    backgroundColor: "rgb(97, 100, 255)",
    padding: "10px",
    borderColor: 'rgb(97, 100, 255)',
    fontSize: '1rem',
    
  };

  const mystyle1 = {
    color: "white",
    fontFamily: "Noto Kufi Arabic",
    fontSize: '1.11rem',
    lineHeight: 1.1,
  };
  
  if (show) {
    return (
      <Alert style={mystyle} className='tobBar' onClose={() => setShow(false)} dismissible>
        <Alert.Heading style={mystyle1} className="blinkingtext">
          <div className='container text-center'>
          احذر المحتالين ، المنصة لا تتواصل بأي طريقة خارج الموقع الرسمي
          </div>
        </Alert.Heading>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;

