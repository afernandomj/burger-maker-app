import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder';

const App = () => {
	return (
		<Layout>
			<BurgerBuilder />
		</Layout>
		// <div>
		// 	<h1>Burger Marker App!</h1>
		// 	<ul>
		// 		{burgerIngredients &&
		// 			burgerIngredients.map((ingredient: IngredientsItem) => (
		// 				<li key={ingredient._id}>
		// 					{ingredient.label} ({ingredient.price}) -{' '}
		// 					{ingredient.type}{' '}
		// 					<button
		// 						onClick={() =>
		// 							props.removeIngredient({
		// 								_id: ingredient._id,
		// 							})
		// 						}
		// 					>
		// 						Remove
		// 					</button>
		// 				</li>
		// 			))}
		// 	</ul>
		// </div>
	);
};

// const mapDispatchToProps = (dispatch: Dispatch) => ({
// 	addIngredient: (payload: IngredientActionPayload) =>
// 		dispatch(burgerActions.addItem.init(payload)),
// 	removeIngredient: (payload: IngredientActionPayload) =>
// 		dispatch(burgerActions.removeItem.init(payload)),
// 	getIngredients: () => dispatch(burgerActions.getItems.init()),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
