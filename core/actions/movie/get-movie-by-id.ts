import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const getMovieByIdAction = async (id: number): Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

        const completeMovie = MovieMapper.fromMovieDBMovieResponseToCompleteMovie(data);

        return completeMovie;
    } catch (error) {
        console.log(error);

        throw error;
    }
}
