export default function required(msg?: string) {
  throw TypeError(msg);
}
