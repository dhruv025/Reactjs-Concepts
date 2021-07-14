import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [name,setName] = useState("");
  const [language,setLanguage] = useState("");
  const [tnc,setTnc] = useState(false);

  function getFormData(e){
    console.log(e);
    e.preventDefault();
    console.log(name);
    console.log(language);
    console.log(tnc);
  }

  return(
    <div className="heading">
      <h2>Handle Form in React</h2>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setLanguage(e.target.value)}>
          <option>Select Language</option>
          <option>C++</option>
          <option>Java</option>
          <option>JavaScript</option>
        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
