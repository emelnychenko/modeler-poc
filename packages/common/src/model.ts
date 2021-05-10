import { Field } from './field';

export interface Model {
  /**
   * Name of a model.
   */
  name: string;

  /**
   * {@link Field} collection.
   */
  fields: readonly Field[];
}
