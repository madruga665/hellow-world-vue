import axios from "axios";
import { IRickAndMortyCharacter } from "../types";

const RickAndMortyService = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllCharacters = async (): Promise<Array<IRickAndMortyCharacter>> => {
  const response = await RickAndMortyService.get("character/");
  const data = response.data.results;
  return data;
};
