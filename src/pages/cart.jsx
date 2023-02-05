import Navbar from 'components/Navbar';
import { useContext } from 'react';
import AppContext from 'components/AppContext';

const Cart = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Navbar />
			<div className="mt-28">
				<h1>Cart</h1>
				{context.cart.map((item) => (
					<div key={item.id}>
						<h1>{item.name}</h1>
						<p>{item.price}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Cart;
