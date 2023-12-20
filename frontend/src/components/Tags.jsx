import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Tags = ({ tags, forHome }) => {
	const { tag } = useParams()
	let activeTag = tag || 'All'

	return (
		<div>
			<ul
				className={`flex items-center flex-wrap gap-x-3 gap-y-2 ${
					forHome ? 'justify-center' : 'justify-start'
				}`}
			>
				{tags?.map((item) => (
					<li key={item.name}>
						<Link
							to={'/tag/' + item.name}
							className={`px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg inline-block ${
								activeTag === item.name &&
								'bg-red-500 text-white hover:bg-red-600'
							}`}
						>
							{item.name} {forHome && <span>({item.count})</span>}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Tags
