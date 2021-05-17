/**
 * @deprecated will be used if there is any builder interface.
 */
export interface Buildable<T = unknown> {
  /**
   * Build provided type.
   */
  build(): T;
}
