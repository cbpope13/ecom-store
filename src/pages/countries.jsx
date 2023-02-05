import supabase from 'lib/supabaseClient';
import { useEffect, useState } from 'react';

function Page() {
	const [fetchError, setFetchError] = useState(null);
	const [smoothies, setSmoothies] = useState(null);

	useEffect(() => {
		const fetchSmoothies = async () => {
			const { data, error } = await supabase.from('smoothies').select();

			if (error) {
				setFetchError(error);
				setSmoothies(null);
			}
			if (data) {
				setSmoothies(data);
				setFetchError(null);
			}
		};

		fetchSmoothies();
	}, []);

	return (
		<div>
			{fetchError && <div>Failed to load smoothies</div>}
			{smoothies && (
				<ul>
					{smoothies.map((smoothie) => (
						<li key={smoothie.id}>{smoothie.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Page;
