import { Buildable } from './_buildable';

/**
 * @deprecated will be used if there is any builder interface.
 *
 * Used for cloneable instances to avoid side-effects after mutation.
 */
export type BuildSelector<T extends Buildable> = (builder: T) => T;
