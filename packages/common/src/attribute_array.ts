import { Attribute } from './attribute';

export const attributeArrayKey = 'array';

export interface AttributeArray extends Attribute {
  type: typeof attributeArrayKey;

  /**
   * Template of an element.
   */
  attribute: Attribute;
}

export function createAttributeArray(attribute: Attribute): AttributeArray {
  return { type: attributeArrayKey, attribute };
}
