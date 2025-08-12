import { nowPlayingAction } from "@/core/actions/now-playing.action";
import { popularMoviesAction } from "@/core/actions/popular.action";
import { topRatedMoviesAction } from "@/core/actions/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/upcoming.action";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies", "now-playing"],
        queryFn: ({ pageParam = 1 }) => nowPlayingAction({ page: pageParam }),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_, pages) => pages.length + 1,
    });

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies", "popular"],
        queryFn: ({ pageParam = 1 }) => popularMoviesAction({ page: pageParam }),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_, pages) => pages.length + 1,
    });

    const topRatedMoviesQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies", "top_rated"],
        queryFn: ({ pageParam = 1 }) => topRatedMoviesAction({ page: pageParam }),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_, pages) => pages.length + 1,
    });

    const upcomingMoviesQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ["movies", "upcoming"],
        queryFn: ({ pageParam = 1 }) => upcomingMoviesAction({ page: pageParam }),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (_, pages) => pages.length + 1,
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedMoviesQuery,
        upcomingMoviesQuery,
    };
};