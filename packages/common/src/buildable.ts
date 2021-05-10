export interface Buildable<T> {
  /**
   * Build provided type.
   */
  build(): T;
}
