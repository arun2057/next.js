export const uploadImages = async (image, authtoken) => {
  const res = await axios.post(
    `/product/imageUplad`,
    { image },
    {
      headers: {
        authtoken,
      },
    }
  );
  return res;
};
