import HeartIcon from './HeartIcon';
import SwordIcon from './SwordIcon';

const CardIcons = ({ name }) => {
	return (
		<div
			className='absolute top-2 left-2 flex justify-start'
			id={name}
		>
			<HeartIcon name={name} />
			<SwordIcon name={name} />
		</div>
	);
};

export default CardIcons;