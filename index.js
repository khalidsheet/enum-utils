/**
 * Create an enum object
 * @param {Object} enumObject An object containing the enum keys and values
 * @returns {Proxy} A proxy object that returns the enum value when the key is accessed
 *
 * @example
 * const colors = createEnum({
 *     RED: "red",
 *     BLUE: "blue",
 *     GREEN: "green",
 * });
 *
 * console.log(colors.RED); // red
 * console.log(colors.BLUE); // blue
 *
 * @throws {Error} Invalid input: An object is required
 * @throws {Error} Invalid object, Input must not be empty
 * @throws {Error} Invalid object, Values be strings or numbers
 * @throws {Error} Invalid key, [key] does not exist
 * @throws {Error} Cannot set value for [key], Enum is read-only
 */
const createEnum = (enumObject) => {
  if (typeof enumObject !== "object") {
    throw new Error("Invalid input: An object is required");
  }

  const keys = Object.keys(enumObject);
  const values = Object.values(enumObject);

  if (keys.length === 0) {
    throw new Error("Invalid object, Input must not be empty");
  }

  if (
    values.some(
      (value) => typeof value !== "string" && typeof value !== "number"
    )
  ) {
    throw new Error("Invalid object, Values be strings or numbers");
  }

  const enumeration = {};

  keys.forEach((key, index) => {
    Object.defineProperty(enumeration, key, {
      value: values[index],
      writable: false,
      enumerable: true,
      configurable: false,
    });
  });

  const enumProxyHandler = {
    get(target, key) {
      if (key in target) {
        return target[key];
      }

      throw new Error(`Invalid key, ${key} does not exist`);
    },
    set(_, key) {
      throw new Error(`Cannot set value for ${key}, Enum is read-only`);
    },
  };

  return new Proxy(enumeration, enumProxyHandler);
};

module.exports = createEnum;
