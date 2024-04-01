import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    createPokemon: builder.mutation({
      query: (newPokemonData) => ({
        url: "pokemon",
        method: "POST",
        body: newPokemonData,
      }),
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    updatePokemon: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `pokemon/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    deletePokemon: builder.mutation({
      query: (id) => ({
        url: `pokemon/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePokemonMutation,
  useGetPokemonByNameQuery,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
} = pokemonApi;
