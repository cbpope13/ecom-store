import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import AppContext from 'components/AppContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	const initialState = [];
	const [cart, setCart] = useState(initialState);

	useEffect(() => {
		const cartData = JSON.parse(localStorage.getItem('cart'));
		if (cartData) {
			setCart(cartData);
		}
	}, []);

	useEffect(() => {
		if (cart !== initialState) {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AppContext.Provider value={{ cart, setCart }}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</>
	);
}
