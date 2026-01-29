/**
 * Returns a greeting message for the given name.
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}


export function test() {
  return "A"
}

/**
 * Returns a random ID string.
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function test1() {
  return "test1"
}