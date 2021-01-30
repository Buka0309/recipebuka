const arr = [23, 42, 24];
let myfunc = (a) => {
  console.log(`too: ${a}`);
};
const arr2 = [...arr, 96, 97];
myfunc(arr2[1]);
