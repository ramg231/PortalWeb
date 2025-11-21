import { useEffect, useState } from 'react'
import { api } from '@/api/strapi'

const useStrapiCollection = (endpoint, params = {}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await api.get(endpoint, { params })
        setData(res.data?.data || [])
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [endpoint, JSON.stringify(params)])

  return { data, loading, error }
}

export default useStrapiCollection
