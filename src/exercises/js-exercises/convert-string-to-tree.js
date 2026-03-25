class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function convertStringToTree(input) {
  const tree = buildTree(input);
  return tree;
}

function buildTree(inputString, parentNode = null) {
  console.log('inputString', inputString);
  const asArray = Array.from(inputString);
  // Peel off a level of tree
  const thisLevel = asArray.splice(0, 1);
  console.log('this', thisLevel.toString());
  asArray.splice(0, 1);
  asArray.splice(asArray.length - 1, 1);

  console.log('is', asArray.toString());

  // Associate anything in this level with its parent node

  return asArray;
}
