import useSWRInfinite from "swr/infinite";

import { fetcher } from "@/hooks/common";
import { VIDEO_LIMIT } from "@/utils/constant";

interface IMainVideo {
  category_level2_no: number;
}

const useMoreVideoList = ({ category_level2_no }: IMainVideo) => {
  const { data, mutate, size, setSize, isLoading } = useSWRInfinite(
    (index) =>
      `https://api.khanteum.com/api/v2/main/videos/${category_level2_no}?page=${
        index + 1
      }&limit=${VIDEO_LIMIT}`,
    fetcher,
    { revalidateFirstPage: false }
  );
  return {
    data,
    mutate,
    size,
    setSize,
    isLoading,
  };
};

export default useMoreVideoList;
