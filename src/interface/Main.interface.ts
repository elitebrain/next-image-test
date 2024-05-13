interface IBanner {
  banner_no: number;
  banner_url: string;
  redirect_url: string;
  type: string;
}

interface ICategory {
  category_level2: string;
  category_level2_korean_title: string;
  category_level2_no: number;
  totalPush: string;
  totalVideoCount: number;
  videoList: IVideo[];
}

interface IRanking {
  nickname: string;
  ranking: number;
  totalPush: string;
  user_no: number;
  user_photo: string;
}

interface IVideo {
  category_level2_no: number;
  category_level3_no: number;
  count_like: number;
  count_view: number;
  thumbnail: string;
  video_no: number;
}

export { IBanner, ICategory, IRanking, IVideo };
