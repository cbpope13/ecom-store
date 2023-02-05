import Navbar from 'components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import supabase from 'lib/supabaseClient';
import { useEffect, useState } from 'react';

// set up getStaticProps to fetch data from supabase
export async function getStaticProps() {
	const { data, error } = await supabase.from('watches').select();

	if (error) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			watches: data,
		},
	};
}

export default function Home({ watches }) {
	return (
		<>
			<Navbar />
			<div className="mt-28">
				<h1 className="text-center text-4xl font-bold my-10 underline">
					Watches
				</h1>
				<div className="grid grid-cols-4 gap-2 px-8">
					{watches &&
						watches.map((watch) => (
							<Link
								href={`/watches/${watch.id}`}
								className="flex flex-col justify-between"
								key={watch.id}
							>
								<div className="bg-neutral-300 h-full flex items-center p-4">
									<Image
										src={watch.src}
										alt={watch.name}
										width={100}
										height={200}
										className="flex mx-auto"
									/>
								</div>
								<div className="flex flex-col items-center space-y-2 py-2 mb-10">
									<h3 className="text-lg">{watch.name}</h3>
									<p className="text-lg font-bold">${watch.price}</p>
								</div>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}
