import { Field } from './field';
import { Fields } from './fields';

export interface Model {
  /**
   * {@link Field} mapping.
   */
  fields: Fields;
}
