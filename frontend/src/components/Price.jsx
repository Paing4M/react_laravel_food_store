const Price = ({ price, locale = 'en-US', currency = 'USD' }) => {
	const formatPrice = () =>
		new Intl.NumberFormat(locale, {
			style: 'currency',
			currency,
		}).format(price)

	return <div>{formatPrice()}</div>
}

export default Price
