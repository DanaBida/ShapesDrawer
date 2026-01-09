import { randomElemFromArr } from '../utils/random.js';

export class ColorsService {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  getColor = async () => {
    const testSentryError = () => {
      throw new Error('Backend test error - Sentry is working!');
    };
    const result = randomElemFromArr(this.colors);
    testSentryError()
    return result
  }
}
