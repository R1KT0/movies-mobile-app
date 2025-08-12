import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { Genre, MovieDBMovieResponse, ProductionCompany } from "../interfaces/moviedb-movie-response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
    // Fallback to a default value if IMAGE_BASE_URL is undefined for any reason
    private static readonly IMAGE_BASE_URL: string = "https://image.tmdb.org/t/p/w500"
    static fromResultToMovie(movie: Result): Movie {


        return {
            id: movie.id,
            title: movie.title ?? "",
            description: movie.overview ?? "",
            releaseDate: movie.release_date
                ? new Date(movie.release_date).toISOString()
                : "",
            poster: MovieMapper.getImageUrl(movie.poster_path),
            backdrop: MovieMapper.getImageUrl(movie.backdrop_path),
            rating: typeof movie.vote_average === "number" ? movie.vote_average : 0,
        };
    }

    private static getImageUrl(path?: string | null): string {
        return path ? `${MovieMapper.IMAGE_BASE_URL}${path}` : "";
    }

    static fromMovieDBMovieResponseToCompleteMovie(movie: MovieDBMovieResponse): CompleteMovie {
        return {
            id: movie.id,
            title: movie.title ?? "",
            description: movie.overview ?? "",
            releaseDate: movie.release_date
                ? new Date(movie.release_date).toISOString()
                : "",
            poster: MovieMapper.getImageUrl(movie.poster_path),
            backdrop: MovieMapper.getImageUrl(movie.backdrop_path),
            rating: typeof movie.vote_average === "number" ? movie.vote_average : 0,
            genres: movie.genres.map((genre: Genre) => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map((company: ProductionCompany) => company.name),
        };
    }
}