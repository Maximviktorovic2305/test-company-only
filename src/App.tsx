import MainPage from './pages/Main/MainPage'
import "./styles/index.scss";
import data from "./db/db.json";

const App = () => {

  return (
		<div className='app'>
			<MainPage data={data} />
		</div>
	)
};

export default App;
