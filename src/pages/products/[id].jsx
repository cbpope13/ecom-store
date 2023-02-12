import Navbar from 'components/Navbar';
// import supabase from 'lib/supabaseClient';
import Image from 'next/image';
import { useContext } from 'react';
import AppContext from 'components/AppContext';
import { useState } from 'react';
import Footer from 'components/Footer';

export async function getServerSideProps({ params }) {
	const result = await fetch(`https://fakestoreapi.com/products/${params.id}`);
	const watch = await result.json();

	return {
		props: {
			watch,
		},
	};
}

const Watch = ({ watch }) => {
	const context = useContext(AppContext);
	const [added, setAdded] = useState(false);

	const handleAddToCart = () => {
		if (context.cart.some((w) => w.id === watch.id)) {
			context.setCart(
				context.cart.map((w) =>
					w.id === watch.id ? { ...w, quantity: w.quantity + 1 } : w
				)
			);
		} else {
			context.setCart([...context.cart, { ...watch, quantity: 1 }]);
		}
		setAdded(true);
		setTimeout(() => {
			setAdded(false);
		}, 1000);
	};

	let rating = [1, 2, 3, 4, 5];

	return (
		<div className="h-screen">
			<Navbar />
			<div className="mt-28 tracking-wider h-full">
				{watch && (
					<div className="flex w-full px-16 space-x-10 pt-20">
						<div className="w-full flex items-center justify-center">
							<Image
								width={300}
								height={200}
								src={watch.image}
								alt={watch.title}
							/>
						</div>
						<div className="w-full flex flex-col space-y-10">
							<div className="flex flex-col space-y-2">
								<h1 className="text-xl">{watch.title}</h1>
								<p className="font-semibold">${watch.price}</p>
								<div className="flex items-center">
									{rating.map((r) => (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-3 h-3"
										>
											<path
												fillRule="evenodd"
												d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
												clipRule="evenodd"
											/>
										</svg>
									))}
									<div className="text-xs ml-1">(36)</div>
								</div>
							</div>

							<div>
								<p>{watch.description}</p>
							</div>

							<button
								onClick={handleAddToCart}
								disabled={added}
								className={
									added
										? 'bg-blue-400 rounded-md text-white text-center px-8 py-2 font-semibold cursor-not-allowed'
										: 'bg-blue-900 hover:bg-blue-600 rounded-md text-white text-center px-8 py-2 font-semibold'
								}
							>
								{added && 'Added to cart!'}
								{!added && 'Add to cart'}
							</button>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Watch;
