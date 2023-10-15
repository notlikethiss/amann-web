import "../styles/globals.scss";
import { useState, useCallback, memo } from "react";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SelectChangeEvent } from "@mui/material";

import MenuComponent from "../components/MenuComponent";

const theme = createTheme({
	typography: {
		fontFamily: "Raleway",
	},
});

export interface ILanguage {
	footerBg?: string;
	language: string;
	handleLanguage: (event: SelectChangeEvent) => void;
	visibleMenu: boolean;
	handleMenu: () => void;
}

function App({ Component, pageProps }: AppProps) {
	const [language, setLanguage] = useState<string>("RU");
	const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

	const handleMenu = useCallback(() => {
		if (visibleMenu) {
			setVisibleMenu(false);
		} else {
			setVisibleMenu(true);
		}
	}, [visibleMenu, setVisibleMenu]);

	const handleLanguage = useCallback(
		(event: SelectChangeEvent) => {
			setLanguage(event.target.value as string);
		},
		[setLanguage],
	);

	return (
		<ThemeProvider theme={theme}>
			<Header
				language={language}
				handleLanguage={handleLanguage}
				visibleMenu={visibleMenu}
				handleMenu={handleMenu}
			/>
			{visibleMenu ? (
				<MenuComponent visibleMenu={visibleMenu} handleMenu={handleMenu} />
			) : (
				<>
					<Component {...pageProps} />

					<Footer
						footerBg="#000"
						language={language}
						handleLanguage={handleLanguage}
						visibleMenu={visibleMenu}
						handleMenu={handleMenu}
					/>
				</>
			)}
		</ThemeProvider>
	);
}

export default App;
