import logo from './logo.svg';
import './App.css';

function App() {
  
  const arr =["Mobile Operating System", "Mobile Manufacturers"]
  const arr2 =["Android", "Blackberry","iPhone","Windws Phone"]
  const arr3 =["samsung", "HTC","Micromax","Apple"]
  return (
    <div className="App">
      {/* heading 1 */}
      <h1 style={{textAlign: "left",marginLeft: "10%"}}>{arr[0]}</h1>
        
      {/* list 1 */}
       {arr2.map(e => 
      <li style={{textAlign: "left",marginLeft: "10%"}}>{e}</li>
      )}
      {/* heading 2 */}
      <h1 style={{textAlign: "left",marginLeft: "10%"}}>{arr[1]}</h1>
 
         {/* list 2 */}
      {arr3.map(e => 
         <li style={{textAlign: "left",marginLeft: "10%"}}>{e}</li>
       )}
     
    </div>
  );
}

export default App;
