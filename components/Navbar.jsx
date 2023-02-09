import Link from 'next/link';
import { useContext, useState } from 'react';
import AppContext from './AppContext';

const Navbar = () => {
	const { cart } = useContext(AppContext);
	const [search, setSearch] = useState('');

	const handleSearch = () => {
		location.href = `/search?q=${search}`;
	};

	return (
		<nav className="flex h-[75px] shadow-md justify-between items-center bg-amber-50 px-8 fixed top-0 right-0 left-0 z-50">
			<div className="flex space-x-4 h-full">
				<div className="text-2xl flex items-center font-bold h-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-8 h-8"
					>
						<path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
					</svg>
				</div>
				<div className="flex items-center h-full">
					<Link
						className="hover:text-blue-400 flex items-center hover:bg-neutral-300 transition duration-200 h-full px-6"
						href="/watches"
					>
						All
					</Link>
					<div className="cursor-pointer group h-full">
						<p className="group-hover:text-blue-400 h-full px-6 flex items-center group-hover:bg-neutral-300 transition duration-200">
							Category
						</p>
						<ul className=" hidden group-hover:flex flex-col absolute bg-white border border-neutral-400 rounded-md shadow-md w-40">
							<li className="px-3 py-2 hover:bg-neutral-300 transition duration-200">
								<Link href="/categories/men's clothing">Men's Clothing</Link>
							</li>
							<li className="px-3 py-2 hover:bg-neutral-300 transition duration-200">
								<Link href="/categories/jewelery">Jewelery</Link>
							</li>
							<li className="px-3 py-2 hover:bg-neutral-300 transition duration-200">
								<Link href="/categories/electronics">Electronics</Link>
							</li>
							<li className="px-3 py-2 hover:bg-neutral-300 transition duration-200">
								<Link href="/categories/women's clothing">
									Women's Clothing
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-neutral-400 bg-white border px-3 py-2 rounded-md flex items-center w-1/3">
				<input
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSearch();
						}
					}}
					type="text"
					className="outline-none bg-transparent w-full"
				/>
				<button onClick={handleSearch}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-[20px] h-[20px]"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</div>
			<div>
				<Link
					href="/cart"
					className="relative flex items-center justify-center w-14 h-14 rounded-md hover:bg-neutral-300 transition duration-200 group"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-8 h-8 group-hover:text-blue-900 transition duration-200"
					>
						<path
							fillRule="evenodd"
							d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
							clipRule="evenodd"
						/>
					</svg>

					<div
						className={
							!cart.length
								? 'hidden'
								: 'absolute top-2 right-2 bg-blue-300 rounded-full w-[20px] h-[20px] font-bold text-center text-[11px] text-black flex items-center justify-center'
						}
					>
						<p>
							{cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)}
						</p>
					</div>
				</Link>
			</div>
		</nav>
		// <nav className="bg-amber-50">
		// 	<div className="p-4 flex space-x-6">
		// 		<Link href="/" className="h-full">
		// 			All
		// 		</Link>
		// 		<div className="cursor-pointer group" href="/watches">
		// 			<p className="group-hover:text-blue-400 transition duration-200">
		// 				Category
		// 			</p>
		// 			<ul className=" hidden group-hover:flex flex-col absolute -bottom-20 bg-white border border-neutral-400 rounded-md shadow-md w-40">
		// 				<li className="px-3 py-2 hover:bg-neutral-300 transition duration-200">
		// 					<Link href="/mens clothing">Mens Clothing</Link>
		// 				</li>
		// 				<li className="px-3 py-2 hover:bg-neutral-300 transition duration-200">
		// 					<Link href="/jewelry">Jewelry</Link>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};

export default Navbar;
