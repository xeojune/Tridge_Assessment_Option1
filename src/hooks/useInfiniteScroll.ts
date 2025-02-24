import { useState, useEffect, useCallback, useRef } from 'react';

interface FetchResponse<T> {
  items: T[];
  hasMore: boolean;
}

interface UseInfiniteScrollProps<T> {
  fetchData: (page: number) => Promise<FetchResponse<T>>;
  initialPage?: number;
}

// infinite scroll을 위한 커스텀 훅 함수 (observe를 통해 다음 요소를 노출하고 pagination을 통한 노출된 데이터를 불러오는 함수)
export function useInfiniteScroll<T>({ 
  fetchData, 
  initialPage = 0 
}: UseInfiniteScrollProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);
  
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMore = async () => { 
    try {
      setLoading(true);
      const response = await fetchData(page);
      setData(prev => page === 0 ? response.items : [...prev, ...response.items]);
      setHasMore(response.hasMore);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore();
  }, [page]);

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return {
    data,
    loading,
    error,
    hasMore,
    lastElementRef
  };
}
