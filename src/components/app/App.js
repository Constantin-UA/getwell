import Main from '../main/Main';
import About from '../about/About';
import Consumers from '../consumers/Consumers';
import Comntacts from '../contacts/Contacts';
import lang from '../../data';
import { useState } from 'react';
import NavbarCompon from '../menu/NavbarCompon';
import LogisticDrive from '../logisticDrive/LogisticDrive';
import Agricultural from '../agricultural/Agricultural';
import Petroleum from '../petroleum/Petroleum';
import './app.scss';

function App() {
	const [language, setLanguage] = useState(lang[0]);
	const langSelected = (choise) => {
		setLanguage(lang[choise]);
	};
	return (
		<div className="app">
			<NavbarCompon lang={language} langSelected={langSelected} />
			<Main lang={language} />
			<About lang={language} />
			<Petroleum lang={language} />
			<Consumers lang={language} />
			<LogisticDrive lang={language} />
			<Agricultural lang={language} />
			<Comntacts lang={language} />
		</div>
	);
}

export default App;
