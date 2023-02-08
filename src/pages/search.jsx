import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import supabase from 'lib/supabaseClient';
import { useRouter } from 'next/router';

export async function getServerSideProps(req, res) {
	let q = req.query.q;
	const { data, error } = await supabase
		.from('watches')
		.select(`*`)
		.ilike(`name`, `%${q}%`);

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

const Search = ({ watches }) => {
	const { query } = useRouter();

	return (
		<>
			<Navbar />
			<div className="mt-28 px-8 h-screen">
				<div className="my-10 flex items-center space-x-2 text-sm">
					<p>
						Showing {watches.length} result for <strong>"{query.q}"</strong>
					</p>
				</div>
				<div className="grid grid-cols-4 gap-2">
					{watches &&
						watches.map((watch) => (
							<Link
								href={`/watches/${watch.id}`}
								className="flex flex-col justify-between"
								key={watch.id}
							>
								<div className="bg-neutral-300 h-full flex items-center p-4 relative group">
									<Image
										src={watch.src}
										alt={watch.name}
										width={100}
										height={200}
										className="flex mx-auto group-hover:scale-110 transition duration-300 ease-in-out"
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
			<Footer />
		</>
	);
};

export default Search;
