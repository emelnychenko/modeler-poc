import { Attribute } from './attribute';
import { AttributeMap } from './attribute_map';

export const attributeGroupType = 'group';

/**
 * Hierarchical {@link Attribute} for key-value structure.
 */
export interface AttributeGroup extends Attribute {
  type: typeof attributeGroupType;

  /**
   * Record of attributes.
   */
  attributes: AttributeMap;
}

/**
 * Helper function to create {@link AttributeGroup}.
 */
export function createAttributeGroup(attributes: AttributeMap): AttributeGroup {
  return { type: attributeGroupType, attributes };
}
