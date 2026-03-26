// const ToggleOne = () => {
// 	const [isOn, setIsOn] = useState(off);

// 	return (
// 		<button onClick={() => setIsOn(!isOn)}>switch</button>
// 		{isOn && <span>off</span>}
// 		{!isOn && <span>on</span>}
// 	);
// }

// const ToggleTwo = () => {
// 	const [isOn, setIsOn] = useState(off);

// 	return (
// 		{isOn && <span>off</span>}
// 		{!isOn && <span>on</span>}
// 		<button onClick={() => setIsOn(!isOn)}>switch</button>
// 	);
// }

const ToggleContext = React.createContext(false);

const ToggleCompound = ({ children }) => {
  const [isOn, setIsOn] = useState(off);

  return (
    <ToggleContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </ToggleContext.Provider>
  );
};

ToggleCompound.TextOn = function TextOn() {
  const { isOn } = useContext(ToggleContext);

  return isOn ? null : <span>On</span>;
};
ToggleCompound.TextOff = function TextOff() {
  const { isOn } = useContext(ToggleContext);

  return isOn ? <span>Off</span> : null;
};
ToggleCompound.TextButton = function TextButton() {
  const { setIsOn } = useContext(ToggleContext);

  return <button onClick={() => setIsOn((isOn) => !isOn)}>switch</button>;
};

ToggleCompound.CustomButton = function TextButton() {
  const { setIsOn } = useContext(ToggleContext);

  return <button onClick={() => setIsOn((isOn) => !isOn)}>switch</button>;
};

const Component = () => {
  return (
    <ToggleCompound>
      <ToggleCompound.TextOn />
      {/* <ToggleCompound.TextButton /> */}
      <ToggleCompound.CustomButton />
      <ToggleCompound.TextOff />
    </ToggleCompound>
  );
};
