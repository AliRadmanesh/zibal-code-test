// import data from "./assets/data.json";
import data from "./assets/data2.json";
import createComponent from "./utils/createComponent";

const App = () => {
  return (
    <div className="App">
      {createComponent({
        key: data.length,
        component: data,
      })}
    </div>
  );
};

export default App;
