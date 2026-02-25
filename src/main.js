function calculate() {
    let weight = parseFloat(document.getElementById("weight-in").value);
    let dosage = parseFloat(document.getElementById("dosage-in").value);
    let concentration = parseFloat(document.getElementById("concentration-in").value);

    let weightUnit = document.getElementById("weight-unit").value;
    let dosageUnit = document.getElementById("dosage-unit").value;
    let concentrationUnit = document.getElementById("concentration-unit").value;

    const output = document.getElementById("final-output");

    if (Number.isNaN(weight) || Number.isNaN(dosage) || Number.isNaN(concentration)) {
        output.hidden = false;
        output.textContent = "Please Enter Numbers";
        return;
    }

    let milligrams = findMilligrams(weightUnit, dosageUnit, weight, dosage);

    milliliters = milligrams / concentration;

    // Rounds to 2 decimals

    milliliters = +milliliters.toFixed(2);

    output.hidden = false;
    output.textContent = `${milliliters} milliliters`;
    
    return;

}

// Finds milligram value in all situations

function findMilligrams(weightUnit, dosageUnit, weight, dosage) {

    if (weightUnit === "lb" && dosageUnit === "mg/lb") {
        return weight * dosage;
    }
    else if (weightUnit === "lb" && dosageUnit === "mg/kg") {
        return weight * 0.453592 * dosage;
    }
    else if (weightUnit === "kg" && dosageUnit ==="mg/lb") {
        return weight * 2.20462 * dosage;
    }
    else if (weightUnit === "kg" && dosageUnit ==="mg/kg") {
        return weight * dosage;
    }

}

function isNumber(n) {
  return typeof(n) === "number";
}


function main() {
    const solveButton = document.getElementById("solve-button");
    solveButton.addEventListener("click", calculate)
}

window.addEventListener("load", main)