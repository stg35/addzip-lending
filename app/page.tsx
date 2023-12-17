import { Benefits } from './components/Benefits/Benefits';
import { FAQ } from './components/FAQ/FAQ';
import { Functionality } from './components/Functionality/Functionality';
import { Info } from './components/Info/Info';
import { Launch } from './components/Launch/Launch';
import { Partnership } from './components/Partnership/Partnership';
import { Welcome } from './components/Welcome/Welcome';

export default function MainPage(): JSX.Element {
	return (
		<main>
			<Welcome />
			<Info />
			<Benefits />
			<Functionality />
			<Launch />
			<Partnership />
			<FAQ />
		</main>
	);
}
