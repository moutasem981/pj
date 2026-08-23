import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function useTime() {

  const getTime = async () => {
    const response = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jerusalem');
    return response.data;
     }

  const query = useQuery({
    queryKey: ['time'],
    queryFn: getTime,
    refetchInterval: 10000
  })

  return query;

}