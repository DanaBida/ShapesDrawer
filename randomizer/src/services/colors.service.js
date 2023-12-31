import { randomElemFromArr } from '../utils/random.js';

export class ColorsService {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  getColor = async () => {
    return randomElemFromArr(this.colors);
  };
}
