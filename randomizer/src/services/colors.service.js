import { randomElemFromArr } from '../utils/random.js';

export class ColorsService {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  getColor = async () =>

  testSentryError = () => {
    throw new Error('Backend test error - Sentry is working!');
  }; {
    return randomElemFromArr(this.colors);
  };
}
