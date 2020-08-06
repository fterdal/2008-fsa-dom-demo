console.log("It's working!");

// const root = Array.from(document.getElementById('root'));
const root = document.getElementById('root');
console.log("Root:", root);

const odds = [...document.getElementsByClassName('odd')];
const evens = [...document.getElementsByClassName('even')];
// console.log("Odds:", odds);
odds.forEach((oddP) => {
  // console.log('Odd Paragraph', oddP);
  oddP.style.color = 'orange';
});
evens.forEach((evenP) => {
  // console.log('Odd Paragraph', evenP);
  evenP.style.color = 'blue';
});

const renderNewParagraph = (text, color = 'green') => {
  const newParagraph = document.createElement('P');
  newParagraph.innerText = text;
  newParagraph.style.color = color;
  root.appendChild(
    newParagraph
  );
}

renderNewParagraph('Sixth Node', 'purple');
renderNewParagraph('Seventh Node', 'salmon');
renderNewParagraph('Eigth Node', 'pink');

// const secondToLastChild = root.lastElementChild.previousElementSibling;
// console.log(secondToLastChild)

// const newPNode = document.createElement("P");
// newPNode.innerText = 'This is the Sixth Node';
// root.appendChild(newPNode);
