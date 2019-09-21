export function copy(text: string, options?: Options): boolean

interface Options {
  /**
   * `ClipboardEvent.setData(format)`
   */
  format?: string
}
