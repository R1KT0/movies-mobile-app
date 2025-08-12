import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditResponse } from "@/infrastructure/interfaces/moviedb-credit-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => { 
    try {
        const {data} = await movieApi.get<MovieDBCreditResponse>(`/${movieId}/credits`);

        return data.cast.map(CastMapper.fromMovieDBCastToEntity);
    } catch (error) {
        console.log(error);

        throw error;
    }
}