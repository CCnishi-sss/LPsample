import axios from "axios";

const S3_BUCKET_URL = process.env.REACT_APP_S3_URL;

export const getS3Image = (imagePath) => {
  return `${S3_BUCKET_URL}/${imagePath}`;
};

