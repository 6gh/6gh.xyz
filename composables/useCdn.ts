export const useCdn = (imagePath: string) => {
  const cdnBase = useRuntimeConfig().public.baseUrl;

  return `${cdnBase}${imagePath}`;
};
