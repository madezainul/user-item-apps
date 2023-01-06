import React, { useState } from "react";

const LearnButton = () => {
  const [number, setNumber] = useState(0);
  
//   const addNumber = () => {
//     console.log(`Add Number`);
//     let tambah = number + 1;
//     if (number >= 10) {
//         alert(`Number tidak boleh lebih dari 10`);
//     } else {
//         setNumber(tambah);
//     }
//   }

//   const substractNumber = () => {
//     console.log(`Substract Number`);
//     let kurang = number - 1;
//     if (number <= 0) {
//         alert(`Number tidak boleh lebih kecil dari 0`);
//     } else {
//         setNumber(kurang);
//     }
//   }

//ternary ES6
    const addNumber = () => {
        number >= 10 ? alert(`Number tidak boleh lebih besar dari 10`) : setNumber(number + 1);
    }

    const substractNumber = () => {
        number <= 0 ? alert(`Number tidak boleh kurang dari 0`) : setNumber(number - 1);
    }

  return (
    <div className="container">
      <button onClick={() => addNumber()} className="btn btn-sm btn-primary">
        + Add
      </button>
      <h1>{number}</h1>
      <button onClick={() => substractNumber()} className="btn btn-sm btn-danger">
        - Substract
      </button>
    </div>
  );
};

export default LearnButton;
