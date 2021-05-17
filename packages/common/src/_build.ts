import { Buildable } from './_buildable';

/**
 * @deprecated will be used if there is any builder interface.
 *
 * Helper function to build an object based on provided builder.
 */
export function build<T>(builder: Buildable<T>): T {
  return builder.build();
}
