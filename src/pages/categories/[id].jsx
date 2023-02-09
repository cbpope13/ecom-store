import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export async function getServerSideProps({ params }) {
	const result = await fetch(
		`https://fakestoreapi.com/products/category/${params.id}`
	);
	const watches = await result.json();

	return {
		props: {
			watches,
		},
	};
}

const Category = ({ watches }) => {
	const { query } = useRouter();
	//capitalize first letter in each word
	const capitalize = (str) => {
		return str
			.split(' ')
			.map((word) => word[0].toUpperCase() + word.slice(1))
			.join(' ');
	};

	const path = capitalize(query.id);

	return (
		<>
			<Navbar />
			<div className="mt-28 px-8">
				<div className="my-10 flex items-center space-x-2 text-sm">
					<p>Search</p>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<p>Categories </p>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<p className="text-blue-400">{path}</p>
				</div>
				<div className="grid grid-cols-4 gap-4">
					{watches &&
						watches.map((watch) => (
							<Link
								href={`/watches/${watch.id}`}
								className="flex flex-col justify-between"
								key={watch.id}
							>
								<div className="h-full flex items-center p-4 relative group">
									<Image
										src={watch.image}
										alt={watch.title}
										width={200}
										height={200}
										className="flex mx-auto group-hover:scale-110 transition duration-300 ease-in-out"
									/>
								</div>
								<div className="flex flex-col items-center space-y-2 py-2 mb-10">
									<h3 className="text-lg">{watch.title}</h3>
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

export default Category;
