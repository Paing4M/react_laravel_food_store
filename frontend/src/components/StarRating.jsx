const StarRating = ({ stars, size = 18 }) => {
	const styles = {
		width: size + 'px',
		height: size + 'px',
		marginRight: size / 6 + 'px',
	}

	function Star({ number }) {
		const halfNumber = number - 0.5

		return stars >= number ? (
			<img src='/star-full.svg' style={styles} alt={number} />
		) : stars >= halfNumber ? (
			<img src='/star-half.svg' style={styles} alt={number} />
		) : (
			<img src='/star-empty.svg' style={styles} alt={number} />
		)
	}

	return (
		<div style={styles} className='flex'>
			{[1, 2, 3, 4, 5].map((number) => (
				<Star key={number} number={number} />
			))}
		</div>
	)
}

export default StarRating
