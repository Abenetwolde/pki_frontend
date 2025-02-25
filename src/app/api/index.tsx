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
      query: (formData) => ({
        url: 'requests',
        method: 'POST',
        body: {
          user_id: 1,  // Static user_id as per your request
          form_id: formData.form_id,
          form_data: formData.form_data||"",
          csr: formData.csr||"",  // Assuming csr is passed as part of formData
          status: formData.status||"",
          request_type: formData.request_type||"",
        },
      }),
    }),
  })
});

export const { useGetFormByIdQuery, useGetFormsQuery,usePostFormRegistrationMutation  } = formApi;