import axios from 'axios';

const baseUrl = '/api/notes';

const getAll = () => {
	return axios.get(baseUrl).then((responses) => responses.data);
};

const create = (newObject) => {
	return axios.post(baseUrl, newObject).then((responses) => responses.data);
};

const update = (id, newObject) => {
	return axios
		.put(`${baseUrl}/${id}`, newObject)
		.then((responses) => responses.data);
};

export default {
	getAll,
	create,
	update,
};
