
// desde aqui llamaremos a la api
// hemos instalado axios ahora lo importamos
import axios from 'axios';

const GetActivities = () => {

  const itemsPerPage=18;
  const offset=1
  
  axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`)
  .then(({data}) => data)
  .catch(err => console.log(err))
  
}

export default GetActivities;
