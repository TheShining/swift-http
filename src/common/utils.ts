export class Utils {
  public static isDate(val: any): val is Date {
    return this.callType(val) === '[object Date]'
  }

  public static isObject(val: any): val is Object {
    return this.callType(val) === '[object Object]'
  }

  public static isArray(val: any): val is any[] {
    return this.callType(val) === '[object Array]'
  }

  public static callType(val: any): string {
    return Object.prototype.toString.call(val)
  }
}
