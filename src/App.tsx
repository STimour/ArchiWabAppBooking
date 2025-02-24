import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./assets/MainLayaout";
import "./App.css";
import Accueil from "./Pages/Accueil";
import ContactezNous from "./Pages/ContactezNous";
import EspacePersonnel from "./Pages/EspacePersonnel";
import Planning from "./Pages/Planning";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						index
						element={<Accueil />}
					/>
					<Route
						path="/Planning"
						element={<Planning />}
					/>
					<Route
						path="/EspacePersonnel"
						element={<EspacePersonnel />}
					/>
					<Route
						path="/ContactezNous"
						element={<ContactezNous />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
