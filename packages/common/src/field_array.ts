import { Field } from './field';

export interface FieldArray extends Field {
  type: 'array';

  /**
   * Template of an element.
   */
  field: Field;
}
