import { Card } from './components';

const Cards = ({ filteredData, info, addedPokemons, page }) => {
	return (
		<div>
			<div className='flex justify-center flex-wrap gap-6 my-8'>
				{filteredData.length > 0 ? (
					filteredData.map((result) => (
						<Card
							key={result.name}
							name={result.name}
							addedPokemons={addedPokemons}
							page={page}
						/>
					))
				) : (
					<p>{info}</p>
				)}
			</div>
		</div>
	);
};

export default Cards;
