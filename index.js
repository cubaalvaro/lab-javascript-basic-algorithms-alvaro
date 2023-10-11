let hacker1 = "Alvaro";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Martín";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

for (i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (let j = hacker2.length - 1; j >= 0; j-- ) {
  console.log(hacker2[j]);
}

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula eu dui non efficitur. Aenean at libero eu lacus venenatis maximus. Morbi lacinia, augue eu venenatis tristique, elit turpis consequat justo, ac fermentum ante erat non sem. Cras ut lorem diam. Morbi et nisi dapibus, pulvinar nisi at, ullamcorper tellus. Vestibulum gravida diam vel porttitor tempor. Etiam dignissim tincidunt purus, quis faucibus quam ullamcorper vitae. Curabitur eu nisl ornare, aliquet erat vitae, consequat nibh. Etiam dolor justo, aliquet eget eros vitae, fringilla suscipit dui. Suspendisse accumsan in nulla quis blandit. Sed mattis diam quis purus tempus tristique. Nullam a ex mi. Proin efficitur nulla at turpis facilisis faucibus at eu leo. / Phasellus nec tortor pretium, feugiat tellus eu, efficitur felis. Suspendisse aliquet augue at arcu elementum, sit amet condimentum libero finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sed nunc at dolor porttitor auctor eget eu risus. Pellentesque suscipit, mi sed molestie semper, ex nisl placerat lectus, vitae mattis neque lectus sed nisl. Maecenas tempor dapibus tincidunt. Sed nec sem interdum, tristique ante ac, faucibus magna. Fusce eget nibh mi. / Sed lacinia, neque sed vestibulum elementum, nisi ipsum vehicula nunc, vitae pretium sem tellus id elit. Pellentesque ullamcorper dolor nisi. Ut at neque neque. Maecenas congue nibh a cursus egestas. Sed lobortis ligula ac felis ornare malesuada. Quisque vitae pulvinar enim. Nullam fermentum mi vitae blandit scelerisque. Nunc ornare volutpat purus sit amet sagittis. Praesent in mi a turpis ultrices aliquam. Maecenas urna massa, egestas non aliquam et, egestas eget dui. Pellentesque nec ex ac velit maximus tristique. Nulla in nunc arcu. Proin ultricies augue vitae pharetra suscipit. Donec ac augue velit. Aliquam eu vestibulum magna."

let wordCount = 0;
let etCount = 0;
for (let k = 0; k < longText.length; k++) {
  if (longText[k] === " ") {
    wordCount += 1
  }
  if (longText[k] === "e" && longText[k + 1] === "t") {
    etCount += 1
}
}
console.log(wordCount, etCount);

let phraseToCheck = "AnitalavalatinA";
let phraseReverse = "";
for (z = phraseToCheck.length -1; z >= 0; z--) {
  phraseReverse += phraseToCheck[z];
}

if (phraseReverse === phraseToCheck) {
    console.log("This is a palindrome");
  } else {
    console.log("This is NOT a palindrome");
    }
