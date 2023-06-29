import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleVisible = () => {
    setAlertVisible(true);
  };
  const handleDisable = () => {
    setAlertVisible(false);
  };
  return (
    <div>
      {alertVisible && <Alert handleDisable={handleDisable}>my alert</Alert>}
      <Button handleVisible={handleVisible} />
    </div>
  );
};

export default App;
