export const required = (msg?: string) => {
  throw TypeError(msg);
};

export default {
  required
};
