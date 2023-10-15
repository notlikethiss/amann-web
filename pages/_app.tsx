//main modules
import Head from "next/head";
import { useState, useCallback } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material";

//types
import type { AppProps } from "next/app";

//global styles
import "../styles/globals.scss";

//user components
import MenuComponent from "../components/MenuComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
			<Head>
				<title>AMANN</title>
			</Head>
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
