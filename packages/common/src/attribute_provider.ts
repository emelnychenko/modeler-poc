import { AttributeGroup, createAttributeGroup } from './attribute_group';
import { AttributeArray, createAttributeArray } from './attribute_array';
import { Attribute } from './attribute';
import { Selector } from './selector';
import { AttributeMap } from './attribute_map';
import { createEmptyAttribute } from './attributes';

/**
 * Definition of factory function.
 */
export type CompactAttributeProvider = Selector<AttributeProvider, Attribute>;

/**
 * Type for finished object or factory function.
 */
export type AttributeOrCompactProvider = Attribute | CompactAttributeProvider;

/**
 * Function to either create an attribute or return the same if it is an object.
 * @param value
 * @param provider
 */
export function resolveAttributeOrCompactProvider(value: AttributeOrCompactProvider, provider: AttributeProvider): Attribute {
  if (typeof value === 'function') {
    return value(provider);
  }

  return value; // todo: validate later on.
}

/**
 * Interface for building either an attribute or complex schemas.
 */
export class AttributeProvider {
  /**
   * Provide something empty.
   */
  empty(): Attribute {
    return createEmptyAttribute();
  }

  /**
   * Provide attribute group.
   * @param attributes
   */
  group(attributes: AttributeMap<AttributeOrCompactProvider>): AttributeGroup {
    return createAttributeGroup(
      Object.keys(attributes).reduce<AttributeMap>((resolved, key) => {
        resolved[key] = resolveAttributeOrCompactProvider(attributes[key], this);
        return resolved;
      }, {}),
    );
  }

  /**
   * Provide attribute array.
   * @param attribute
   */
  array(attribute: AttributeOrCompactProvider): AttributeArray {
    return createAttributeArray(
      resolveAttributeOrCompactProvider(attribute, this),
    );
  }
}

/**
 * It is usually a good idea to have default instance for a different purpose.
 */
export const defaultAttributeProvider = new AttributeProvider();
