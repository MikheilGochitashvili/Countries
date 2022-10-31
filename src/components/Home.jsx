import "../css/Home.css";
import Catalog from "./Catalog";

const Home = ({mode, setMode}) => {
  return (
    <body style={{background: mode ? 'rgb(234, 234, 234)' : '#010409'}}>
      <Catalog mode={mode} setMode={setMode} />
    </body>
  );
};

export default Home;
