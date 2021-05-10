import { Field } from './field';
import { Fields } from './fields';

export interface FieldGroup extends Field {
  type: 'group';

  /**
   * Sub-collection of fields.
   */
  fields: Fields;
}
