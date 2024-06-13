import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './Topbar.css';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  const mystyle = {
    color: "white",
    backgroundColor: "rgb(97, 100, 255)",
    padding: "10px",
    fontFamily: "Noto Kufi Arabic",
    borderColor: 'rgb(97, 100, 255)',
    
  };

  if (show) {
    return (
      <Alert style={mystyle} className='tobBar' onClose={() => setShow(false)} dismissible>
        <Alert.Heading style={{ fontSize: '18px' }}  className="blinking-text">
          احذر المحتالين ، المنصة لا تتواصل بأي طريقة خارج الموقع الرسمي</Alert.Heading>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;

