export const ChangeArrKeyHelperFunction = (
  originalKey: any,
  newKey: any,
  arr: Array<any>,
) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    obj[newKey] = obj[originalKey];
    delete obj[originalKey];
    newArr.push(obj);
  }
  return newArr;
};
