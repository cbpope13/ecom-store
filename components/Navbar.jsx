import Link from 'next/link';
import { useContext } from 'react';
import AppContext from './AppContext';

const Navbar = () => {
	const { cart } = useContext(AppContext);

	return (
		<nav className="flex justify-between items-center bg-blue-900 text-white px-8 py-4 fixed top-0 right-0 left-0">
			<div className="flex items-center space-x-6">
				<p className="text-2xl font-bold">Clothing Store</p>
				<div className="flex items-center space-x-4">
					<Link href="/watches">Watches</Link>
					<Link href="/ties">Ties</Link>
				</div>
			</div>
			<div className="border-neutral-100 border-2 px-3 py-2 rounded-md flex items-center w-1/3">
				<input type="text" className="outline-none bg-transparent w-full" />
				<button>
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
				<Link href="/cart" className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-8 h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<div
						className={
							!cart.length
								? 'hidden'
								: 'absolute -top-1 -right-1 border-2 border-blue-900 bg-white rounded-full w-[20px] h-[20px] font-bold text-center text-xs text-blue-900'
						}
					>
						{cart.length}
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
