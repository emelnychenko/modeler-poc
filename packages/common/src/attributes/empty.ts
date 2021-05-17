import { Attribute } from '@modeler/common';

/**
 * Following "null object" pattern it is default attribute.
 */
export interface EmptyAttribute extends Attribute {
  type: 'empty';
}

export function createEmptyAttribute(): EmptyAttribute {
  return { type: 'empty' };
}

export const emptyAttribute = Object.freeze(
  createEmptyAttribute(),
);
