import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tlwkc1rr-3000.uks1.devtunnels.ms/api/' }),
  endpoints: (builder) => ({
    getFormById: builder.query({
      query: (id) => `forms/${id}`,
    }),
  }),
});

export const { useGetFormByIdQuery } = formApi;