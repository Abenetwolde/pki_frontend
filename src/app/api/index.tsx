import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 
    'http://172.20.83.24:3000/api/', // Your API URL
    prepareHeaders: (headers) => {
  
        headers.set("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkN1c3RvbWVyIiwiaWF0IjoxNzQ0MTA4MzY2LCJleHAiOjE3NDY3MDAzNjZ9.EpZNuykeZggXrLbYK3GpOAX-QUd0lIC0sdbpvOiAUPk`);
 
      return headers;
    },
  }),

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