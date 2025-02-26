import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tlwkc1rr-3000.uks1.devtunnels.ms/api/' }),
  endpoints: (builder) => ({
    getFormById: builder.query({
      query: (id) => `forms/${id}`,
    }),
    getForms: builder.query({
      query: () => `forms`,
    }),
    postFormRegistration: builder.mutation({
      query: (newRequest) => ({
        url: 'requests',
        method: 'POST',
        body:newRequest
      }),
    }),
  })
});

export const { useGetFormByIdQuery, useGetFormsQuery,usePostFormRegistrationMutation  } = formApi;