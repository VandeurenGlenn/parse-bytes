declare module 'parse-bytes' {
  /**
   * Parses a string representing a size in bytes and converts it to a number.
   *
   * @param input - The input string to parse, e.g., '1 KB', '1.5 MB'.
   * @returns The size in bytes as a number.
   * @throws Will throw an error if the input format is invalid or if the unit is not recognized.
   */
  export default function parseBytes(input: string): number;
}
