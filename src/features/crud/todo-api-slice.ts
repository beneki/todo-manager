import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../../interfaces'

interface XHRResponse {
  tasks: ITask[]
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:9001/v1'
        : '/api',
    // prepareHeaders(headers) {
    //   headers.set('x-api-key', DOGS_API_KEY)
    //   return headers
    // },
  }),
  endpoints(builder) {
    return {
      fetchToDoList: builder.query<XHRResponse, number | void>({
        query(limit = 10) {
          return `/tasks?limit=${limit}`
        },
      }),
      syncToDoList: builder.mutation<ITask[], { tasks: ITask[] }>({
        query(body) {
          return {
            url: `/tasks/sync`,
            method: 'POST',
            body,
          }
        },
      }),
    }
  },
})
export const { useFetchToDoListQuery, useSyncToDoListMutation } = apiSlice
