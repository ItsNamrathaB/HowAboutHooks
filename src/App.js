import React,{ useState,useEffect} from 'react';
const outerDivStyle = {
  width:'100%',
  height:'100vh',
  backgroundColor:'#FAE7F9'
};
const tableWrapperStyle = {
  color:'#781271',
  whiteSpace: 'pre-line'
};
const tableStyle = {
  width:'100%',
  height:'99vh'
};
const tableHeaderStyle = {
  padding: '15px',
  paddingLeft:'0px',
  textAlign:'left',
  fontWeight:500
};
const headerRowStyle = {
  backgroundColor:'#F0C5ED'
};
const tableRowStyle = {
  backgroundColor:'#F7DCF5'
};
function App() {
  const [hasErrors, setErrors] = useState(false);
  const [people,setPeople] = useState({});

  async function fetchData(){
    const res= await fetch("https://swapi.co/api/people/1");
    res.json().then(res => setPeople(res)).catch(err => setErrors(err));
  }
  useEffect(()=>{fetchData();});
  function generateTable(){
    let table = []
    for (var key in people) {
      let row = []
      row.push(<td>{key}</td>)
      row.push(<td>{people[key]}</td>)
      table.push(<tr style={tableRowStyle}>{row}</tr>)
    }
    table.push(<tr><td>PS: I love purple :)</td></tr>);
    return table
  }
  return (
    <div style={outerDivStyle}>
      <div>
        <span style={tableWrapperStyle}>
          <table style={tableStyle}>
            <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>key</th>
            <th style={tableHeaderStyle}>Value</th>
            </tr>
            {
              generateTable()
            }
          </table>
        </span>
      </div>
    </div>
  );
}

export default App;
