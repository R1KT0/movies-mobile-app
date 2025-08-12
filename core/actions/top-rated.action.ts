import { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieApi } from "../api/movie-api";

interface Options {
    page?: number;
    limit?: number;
}

export const topRatedMoviesAction = async ({ page = 1, limit = 1 }: Options) => {
    try {
        const { data } = await movieApi.get<MoviesDBResponse>("/top_rated", {
            params: {
                page,
                limit,
            },
        });
        const movies = data.results.map(MovieMapper.fromResultToMovie);
        return movies;
    } catch (error) {
        throw error;
    }
}