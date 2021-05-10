import { Buildable } from './buildable';

export function build<T>(builder: Buildable<T>): T {
  return builder.build();
}
