1. //Gwiazdka 5x5
    let line = "";
    for (let i = 1; i <= 5; i++) { 
        let line = ""; 
        for (let j = 1; j <= 5; j++) { 
            line += "*  "; 
        } 
        console.log(line); 
    } 
console.log("----------------------------------------------------");

// 2. Gwiazdka 5x10
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 10; j++) {
      row += "";
    }
    console.log(row);
  }
  console.log("4----------------------------------------------------");
  // 3. Trójkąt 5x5
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "";
    }
    console.log(row);
  }
  console.log("6----------------------------------------------------");
  // 4. Trójkąt odwrócony 5x5
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
      row += "";
    }
    console.log(row);
  }
  console.log("3----------------------------------------------------");
     // 5. Piramida 5x5
     for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
      row += " ";
    }
    for (let j = 0; j <= i; j++) {
      row += "";
    }
    for (let j = 0; j < i; j++) {
      row += "";
    }
    console.log(row);
  }
  console.log("8----------------------------------------------------");
  // 5. Piramida 5x5
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
      row += " ";
    }
    for (let j = 0; j <= i; j++) {
      row += "";
    }
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
// 6. Piramida odwrócona 5x5
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += " ";
    }
    for (let j = 5; j > i; j--) {
      row += "";
    }
    for (let j = 5; j > i; j--) {
      row += "";
    }
    console.log(row);
  }
  console.log("5----------------------------------------------------");
  let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space  = '  ';
  console.log(space.repeat((n-i))+str.repeat(i));
}
console.log("7----------------------------------------------------");
let i = 5;
for (let i = n; i >= 1; i--) {
  let str = "* ";
  let space  = '  ';
  console.log(space.repeat(n-i)+str.repeat(i));
}
console.log("Ćwiczenie ");

let star = "*";
for(let i = 6; i > 0; i -=2) {
  let line = star.repeat(i);

  console.log(line);
  console.log(line);

}