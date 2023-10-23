/* eslint-disable max-depth */
function completeArray(rows, column) {
  const initialArray = [];

  for (let i = 0; i < rows; i++) {
    const interiorArray = [];
    for (let j = 0; j < column; j++) {
      const number = Math.round(Math.random());
      interiorArray.push(number);
    }

    initialArray.push(interiorArray);
  }

  return initialArray;
}

function emptyArray(rows) {
  const newArray = [];
  for (let i = 0; i < rows; i++) {
    newArray.push([]);
  }

  return newArray;
}

const rows = 5;
const column = 5;
const rounds = 10;
const initialArray = completeArray(rows, column);
let array = initialArray;

let j = 0;
console.log(array);
while (j < rounds) {
  const newArray = emptyArray(rows);
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      const valuesArray = [];
      if (
        (y === 0 && x === 0) ||
        (y === 0 && x === array.length - 1) ||
        (y === array.length - 1 && x === 0) ||
        (y === array.length - 1 && x === array.length - 1)
      ) {
        let i = 0;
        if (y === 0 && x === 0) {
          if (array[y][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        } else if (y === 0 && x === array.length - 1) {
          if (array[y][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        } else if (y === array.length - 1 && x === 0) {
          if (array[y - 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y - 1][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        } else {
          if (array[y - 1][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y - 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        }
      } else if (
        x === 0 ||
        x === array.length - 1 ||
        y === 0 ||
        y === array.length - 1
      ) {
        let i = 0;
        if (x === 0) {
          if (array[y - 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y - 1][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        } else if (x === array.length - 1) {
          if (array[y - 1][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y - 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        } else if (y === 0) {
          if (array[y][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y + 1][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        } else {
          if (array[y - 1][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y - 1][x] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y - 1][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x - 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;

          if (array[y][x + 1] === 1) {
            valuesArray[i] = 1;
          } else {
            valuesArray[i] = 0;
          }

          i++;
        }
      } else {
        let i = 0;
        if (array[y - 1][x - 1] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y - 1][x] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y - 1][x + 1] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y][x - 1] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y][x + 1] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y + 1][x - 1] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y + 1][x] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }

        i++;

        if (array[y + 1][x + 1] === 1) {
          valuesArray[i] = 1;
        } else {
          valuesArray[i] = 0;
        }
      }

      let counter = 0;

      for (let k = 0; k < valuesArray.length; k++) {
        counter += valuesArray[k];
      }

      if (array[y][x] === 0) {
        if (counter === 3) {
          newArray[y][x] = 1;
        } else {
          newArray[y][x] = 0;
        }
      } else if (counter === 2 || counter === 3) {
        newArray[y][x] = 1;
      } else {
        newArray[y][x] = 0;
      }
    }
  }

  array = newArray;
  console.log(array);
  j++;
}
