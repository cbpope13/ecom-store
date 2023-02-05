import Navbar from 'components/Navbar';
import { useContext } from 'react';
import AppContext from 'components/AppContext';
import Image from 'next/image';

const Cart = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Navbar />
			<div className="mt-28">
				<h1 className="text-2xl font-bold text-blue-900 text-center">Cart</h1>
				<div className="flex px-8 space-x-8 items-start mt-20">
					<div className="border-b w-3/4 border-neutral-200">
						<div className="font-bold mb-2 flex justify-between">
							{context.cart
								.map((item) => item.quantity)
								.reduce((a, b) => a + b, 0)}{' '}
							items
							<div className="flex space-x-12 mr-[60px]">
								<p>Quantity</p>
								<p>Subtotal</p>
							</div>
						</div>
						{context.cart.map((item) => (
							<div
								key={Math.random()}
								className="flex border-t border-neutral-200 py-4 justify-between"
							>
								<div className="flex space-x-4">
									<div className="bg-neutral-300 p-4">
										<Image
											src={item.src}
											alt={item.name}
											width={50}
											height={50}
										/>
									</div>
									<div className="flex flex-col space-y-2">
										<h1 className="text-lg">{item.name}</h1>
										<p className="font-semibold">${item.price}</p>
									</div>
								</div>
								<div className="flex items-start space-x-12">
									<div className="flex space-x-2">
										<button
											onClick={() => {
												if (item.quantity > 1) {
													context.setCart(
														context.cart.map((w) =>
															w.id === item.id
																? { ...w, quantity: w.quantity - 1 }
																: w
														)
													);
												}
											}}
											className={
												item.quantity === 1
													? 'text-3xl flex text-neutral-400'
													: 'text-3xl flex'
											}
										>
											-
										</button>
										<div className="border border-neutral-200 py-2 px-4">
											{item.quantity}
										</div>
										<button
											onClick={() => {
												context.setCart(
													context.cart.map((w) =>
														w.id === item.id
															? { ...w, quantity: w.quantity + 1 }
															: w
													)
												);
											}}
											className="text-3xl flex"
										>
											+
										</button>
									</div>
									<p className="font-semibold">${item.price * item.quantity}</p>
									<button
										onClick={() => {
											context.setCart(
												context.cart.filter((w) => w.id !== item.id)
											);
										}}
										className="text-3xl"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-6 h-6"
										>
											<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
										</svg>
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="mt-[32px] border border-neutral-200 flex flex-col space-y-4 p-4 w-1/4">
						<div className="flex justify-between">
							<p className="font-bold">Subtotal</p>
							<p className="font-semibold">
								${context.cart.reduce((a, b) => a + b.price * b.quantity, 0)}
							</p>
						</div>
						<div className="flex justify-between">
							<p className="text-sm">Sales tax</p>
							<p>-</p>
						</div>
						<div className="flex justify-between">
							<p className="font-bold">Total</p>
							<p className="font-semibold">
								${context.cart.reduce((a, b) => a + b.price * b.quantity, 0)}
							</p>
						</div>
						<div>
							<button className="bg-blue-900 text-white w-full py-2 rounded-md">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
