console.log("It's working!");

const root = document.getElementById("root");
console.log(root);

const secondToLastChild = root.lastElementChild.previousElementSibling;
console.log(secondToLastChild)

const newPNode = document.createElement("P");
newPNode.innerText = 'This is the Sixth Node';
root.appendChild(newPNode);
