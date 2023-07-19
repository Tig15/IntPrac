function mergeObjbyCtr(arr){
  const mergeObj = {}

  for(const obj of arr){
    const {category, name} = obj // destructuring
    if(mergeObj.hasOwnProperty(category)){
      mergeObj[category].names.push(name)
    } else{
      mergeObj[category] = {category, names:[name]}
    }
  }

  return Object.values(mergeObj)
}

const data = [
  { category: "Fruit", name: "Apple" },
  { category: "Fruit", name: "Banana" },
  { category: "Vegetable", name: "Carrot" },
  { category: "Fruit", name: "Orange" },
  { category: "Vegetable", name: "Broccoli" },
  { category: "Meat", name: "Chicken" },
  { category: "Meat", name: "Beef" },
  { category: "Fruit", name: "Grape" },
];
console.log(mergeObjbyCtr(data));
