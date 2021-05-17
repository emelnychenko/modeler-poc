import { Attribute } from './attribute';
import { AttributeKey } from './attribute_key';

/**
 * Type for key-value attribute map. Generic TValue is about specific value type.
 */
export type AttributeMap<TValue = Attribute> = Record<AttributeKey, TValue>;
