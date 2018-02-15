export type PipeFunction = () => {};
export type PipeFunctionWithArg<T> = (arg: T) => {};

export interface IRegExp<T extends RegExp> {
  ipv4: T;
  ipv6: T;
}
