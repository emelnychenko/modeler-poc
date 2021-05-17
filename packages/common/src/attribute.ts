export interface Attribute {
  /**
   * Type of a field.
   */
  type: string;
}

/**
 * @deprecated it will be the next step to provide validation and messages.
 * @param value
 */
export function isAttribute(value: unknown) {
  return typeof value === 'object' &&
    typeof (value as Attribute).type === 'string';
}
