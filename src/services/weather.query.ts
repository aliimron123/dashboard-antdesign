import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { queryFetch } from "../config/queryClient";
import { ApiError } from "../types/client.types";
import { WeatherList } from "../types/weather.types";

export const GetWeather = (
  options?: UseQueryOptions<WeatherList, ApiError>
) => {
  return useQuery<WeatherList, ApiError>({
    queryKey: ["weather-list"],
    queryFn: async () => {
      return await queryFetch({
        url: "current.json?key=f28caf7bf5fa49599b514545242407&q=jakarta&aqi=no",
      });
    },
    ...options,
  });
};
