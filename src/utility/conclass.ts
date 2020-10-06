/**
 * Combine class names, will ignore non-string values if there's any.
 * @param {string[]} classes Class Names
 */
export default function conclass(...classes: string[]) {
  return classes.filter(c => typeof(c) === 'string').join(' ').trim();
}
