import { Benefits } from './components/Benefits/Benefits';
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
			{/* <Functionality /> */}
			<Launch />
			<Partnership />
			{/* <FAQ /> */}
		</main>
	);
}
