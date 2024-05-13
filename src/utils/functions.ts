import {
  AWS_DESTINATION_URL,
  CLOUDFRONT_VOD_DESTINATION_PREFIX,
  IMAGE_SERVER,
  NCLOUD_OBJECT_STORAGE_URL,
} from "@/utils/constant";

interface IConvertImage {
  url: string;
  width?: number;
  height?: number;
  isOriginal?: boolean;
}

/**
 * 이미지 url 변환 함수
 * @param url 이미지 주소
 * @param width 리사이즈 너비
 * @param height 리사이즈 높이
 * @param isOriginal 원본 이미지 사용 여부
 */
const convertImage = ({ url, width, height, isOriginal }: IConvertImage) => {
  let _url = url;
  if (_url.includes(AWS_DESTINATION_URL)) {
    _url = url.replace(AWS_DESTINATION_URL, CLOUDFRONT_VOD_DESTINATION_PREFIX);
  } else if (_url.includes(NCLOUD_OBJECT_STORAGE_URL)) {
    _url = url.replace(
      NCLOUD_OBJECT_STORAGE_URL,
      `${CLOUDFRONT_VOD_DESTINATION_PREFIX}/backup_ncp`
    );
  } else {
    _url = `${CLOUDFRONT_VOD_DESTINATION_PREFIX}/${url}`;
  }
  if (isOriginal) {
    return _url;
  } else {
    return `${IMAGE_SERVER}?file=${_url}&size=${width}x${height}`;
  }
};

/**
 * 숫자 세자리 마다 , 표시 적용
 * @param number 변환할 숫자
 */
const numberWithCommas = (number) => {
  if (!number) return 0;
  return number.toLocaleString();
};

export { convertImage, numberWithCommas };
