export const useCdn = (imagePath: string) => {
  const cdnBase = useRuntimeConfig().app.cdnURL;

  return `${cdnBase}${imagePath}`;
};
