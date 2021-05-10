import { Model } from './model';
import { build } from './build';
import { ModelBuilder } from './model_builder';

/**
 * Factory function for model.
 * @param name
 * @param configure
 */
export function createModel(name: string, configure: (builder: ModelBuilder) => ModelBuilder = x => x): Model {
  const builder = new ModelBuilder(name);
  const configured = configure(builder);
  return build(configured);
}
