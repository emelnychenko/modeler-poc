import { Buildable } from './buildable';
import { Model } from './model';
import { Field } from './field';

export class ModelBuilder implements Model, Buildable<Model> {
  /**
   * @param name
   * @param fields
   */
  constructor(
    public readonly name: string,
    public readonly fields: readonly Field[] = [],
  ) { }

  /**
   * Add {@link Field}.
   */
  add(name: string): ModelBuilder {
    const field = { name };
    return new ModelBuilder(this.name, [...this.fields, field]);
  }

  /**
   * @inheritDoc
   */
  build(): Model {
    const { name, fields } = this;
    return { name, fields };
  }
}
