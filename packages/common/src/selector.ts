/**
 * Functional type for projecting a new value based on provided one.
 */
export type Selector<T = unknown, R = T> = (value: T) => R;
