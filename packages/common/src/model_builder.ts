import { Buildable } from './buildable';
import { Model } from './model';
import { Field } from './field';
import { Fields } from './fields';
import { FieldGroup } from './field_group';

/**
 * todo:
 * - group field
 * - array field
 */
export class ModelBuilder implements Model, Buildable<Model> {
  /**
   * @param fields
   */
  constructor(public readonly fields: Fields = {}) { }

  add(key: string, field: Field): ModelBuilder {
    return new ModelBuilder({ ...this.fields, [key]: field });
  }

  /**
   * Add {@link Field}.
   * @param key
   * @param type describes type of a field (default `'text'`).
   */
  field(key: string, type = 'text'): ModelBuilder {
    return this.add(key, { type });
  }

  group(key: string) {
    const field: FieldGroup = {
      type: 'group',
      fields: {},
    };

    return this.add(key, field);
  }

  /**
   * @inheritDoc
   */
  build(): Model {
    return { fields: this.fields };
  }
}
