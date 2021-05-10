import { Model } from './model';
import { build } from './build';
import { ModelBuilder } from './model_builder';

/**
 * Factory function for model.
 * @param configure
 */
export function createModel(configure: (builder: ModelBuilder) => ModelBuilder = x => x): Model {
  const builder = new ModelBuilder();
  const configured = configure(builder);
  return build(configured);
}
