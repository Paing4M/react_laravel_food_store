import { sample_foods, sample_tags } from '../../data'
import { axiosInstance } from '../config/axiosInstance'

export const getAll = async () => {
	const res = await axiosInstance.get('/api/foods')
	return res.data
}

export const search = async (searchTerm) => {
	const res = await axiosInstance.get(
		'/api/search/foods?searchTerm=' + searchTerm
	)
	return res.data
}

export const getAllTag = async () => sample_tags

export const getAllByTag = async (tag) => {
	const res = await axiosInstance.get('/api/tag/foods?tag=' + tag)
	return res.data
}

export const getById = async (id) => {
	const res = await axiosInstance.get('/api/foods/' + id)
	return res.data.data
}
