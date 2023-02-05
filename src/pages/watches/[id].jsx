import Navbar from 'components/Navbar';
import supabase from 'lib/supabaseClient';
import Image from 'next/image';
import { useContext } from 'react';
import AppContext from 'components/AppContext';
import { useState } from 'react';

export async function getServerSideProps({ params }) {
	const { data: watch, error } = await supabase
		.from('watches')
		.select('*')
		.eq('id', params.id);

	return {
		props: {
			watch: watch[0],
		},
	};
}

const Watch = ({ watch }) => {
	const context = useContext(AppContext);
	const [added, setAdded] = useState(false);

	const handleAddToCart = () => {
		context.setCart([...context.cart, watch]);
		setAdded(true);
		setTimeout(() => {
			setAdded(false);
		}, 2000);
	};

	return (
		<>
			<Navbar />
			<div className="mt-28">
				{watch && (
					<div className="flex w-full px-16">
						<div className="w-1/2 flex items-center justify-center bg-neutral-300 py-4">
							<Image
								width={200}
								height={200}
								src={watch.src}
								alt={watch.name}
							/>
						</div>
						<div className="w-1/2 p-6">
							<h1>{watch.name}</h1>
							<p>{watch.price}</p>
							<button
								onClick={handleAddToCart}
								disabled={added}
								className={
									added
										? 'bg-blue-600 rounded-md text-white text-center px-8 py-2 font-semibold cursor-not-allowed'
										: 'bg-blue-900 rounded-md text-white text-center px-8 py-2 font-semibold'
								}
							>
								{added && 'Added to cart!'}
								{!added && 'Add to cart'}
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Watch;
