import { request } from 'graphql-request'
import useSWR from 'swr'

const API = 'https://api.graph.cool/simple/v1/movies'

function MovieActors () {
  const { data, error } = useSWR(
    `{
      Movie(title: "Inception") {
        actors {
          id
          name
        }
      }
    }`,
    query => request(API, query)
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return data.actors.map(actor => <li key={actor.id}>{actor.name}</li>)
}
