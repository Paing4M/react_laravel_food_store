import { useEffect } from 'react'
import { useFoodReducer } from '../reducer/foodReducer'
import { getAllTag, getAllByTag, search, getAll } from '../services/foodService'
import Thumbnail from '../components/Thumbnail'
import { useParams } from 'react-router-dom'
import Search from '../components/Search'
import Tags from '../components/Tags'
import NotFound from '../components/NotFound'

const HomePage = () => {
	const [state, dispatch] = useFoodReducer()
	const { foods, tags } = state
	const { searchTerm, tag } = useParams()

	useEffect(() => {
		getAllTag().then((tag) =>
			dispatch({
				type: 'TAGS_LOADED',
				payload: tag,
			})
		)

		const loadFood = tag
			? getAllByTag(tag)
			: searchTerm
			? search(searchTerm)
			: getAll()

		loadFood.then((res) => {
			dispatch({
				type: 'FOODS_LOADED',
				payload: res.data,
			})

			// console.log(res.data)
		})
	}, [searchTerm, tag])

	return (
		<div>
			<Search />
			<div className='mb-6'>
				<Tags tags={tags} forHome />
			</div>
			{foods?.length === 0 && (
				<NotFound text={'Food Not Found !'} linkText={'Reset'} />
			)}
			<Thumbnail foods={foods} />
		</div>
	)
}

export default HomePage
