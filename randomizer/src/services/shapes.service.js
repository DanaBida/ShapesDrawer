import { randomElemFromArr } from '../utils/random.js';

export class ShapesService {
  shapes = ['line', 'triangle', 'rectangle', 'circle'];

  getShape = async () => {
    return randomElemFromArr(this.shapes);
  };
}
