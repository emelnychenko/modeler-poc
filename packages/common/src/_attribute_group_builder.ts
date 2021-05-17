import { Attribute } from './attribute';
import { AttributeMap } from './attribute_map';
import { AttributeKey } from './attribute_key';
import { AttributeGroup, createAttributeGroup } from './attribute_group';
import { createAttributeArray } from './attribute_array';
import { Buildable } from './_buildable';
import {
  AttributeProvider,
  AttributeOrCompactProvider,
  resolveAttributeOrCompactProvider,
  defaultAttributeProvider
} from './attribute_provider';
import { createEmptyAttribute } from './attributes';
import { BuildSelector } from './_build_selector';
import { build } from './_build';

/**
 * @deprecated use {@link AttributeProvider} instead. It is a lot easier to use.
 */
export class AttributeGroupBuilder<TProvider extends AttributeProvider = AttributeProvider> implements Buildable<AttributeGroup> {
  constructor(readonly attributes: AttributeMap = {}, readonly provider: TProvider) { }

  add(key: AttributeKey, attribute: Attribute): AttributeGroupBuilder<TProvider> {
    return new AttributeGroupBuilder({ ...this.attributes, [key]: attribute }, this.provider);
  }

  empty(key: AttributeKey): AttributeGroupBuilder<TProvider> {
    return this.add(key, createEmptyAttribute());
  }

  array(key: AttributeKey, attribute: AttributeOrCompactProvider) {
    return this.add(key, createAttributeArray(resolveAttributeOrCompactProvider(attribute, this.provider)));
  }

  group(key: AttributeKey, attributes: AttributeMap) {
    return this.add(key, createAttributeGroup(attributes));
  }

  build() {
    return createAttributeGroup(this.attributes);
  }
}

/**
 * @deprecated use {@link AttributeProvider} instead. It is a lot easier to use it.
 * @param configure
 */
export function buildAttributeGroup(configure: BuildSelector<AttributeGroupBuilder> = x => x): AttributeGroup {
  const builder = new AttributeGroupBuilder({}, defaultAttributeProvider);
  const configured = configure(builder);
  return build(configured);
}
