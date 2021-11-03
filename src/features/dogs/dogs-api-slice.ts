import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const DOGS_API_KEY = "2b2e7456-3ac3-4dd3-9793-8efd159afcb7"

interface Breed {
  id: string,
  name: string,
  image: {
    url: string
  }
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(Headers) {
      Headers.set("x-api-key", DOGS_API_KEY)

      return Headers
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number|void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        }
      })
    }
  }
})

export const { useFetchBreedsQuery } = apiSlice
