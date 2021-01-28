import axios from 'axios';
export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses/',
	headers: {
		Authorization:
			'Bearer vAMUWAcY1xFW_Jy1Qpkotbpd8k3shxvpk7vICETRRa-tEjWiQHbFYHYyXVXQ51Y0kqPmYZ3c60e_qwWeGoJFcgN0Zj4jXu7l3z1Eyh7ecbojtfUFERAuCGtUifYRYHYx',
	},
});
