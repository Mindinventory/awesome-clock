export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import AwesomeClock from './AwesomeClock';
export default AwesomeClock;
