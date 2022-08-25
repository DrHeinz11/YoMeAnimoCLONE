const useTransform = ([...text]) => {
  const upper = text[0].toUpperCase();
  const splice = text.slice(1);
  return [upper, ...splice].join("");
};

export default useTransform;
