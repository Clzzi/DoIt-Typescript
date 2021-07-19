export const mergeobjects = <T, U>(a: T, b: U): T & U => ({ ...a, ...b });
