const nested = { a: { b: { c: { d: "deep" } } } };
console.log(nested);
// With --console-depth 2 (default): { a: { b: [Object] } }
// With --console-depth 4: { a: { b: { c: { d: 'deep' } } } }
