// Projet à refaire, j'ai eu du mal à comprendre la consigne au départ, puis j'ai pas mal bidouillé pour reprendre des erreurs faites en cours de route. Mais il fonctionne.
function checkCashRegister(price, cash, cid) {
  const CONVERSION_TABLE = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  const INDEX_TABLE = [
    "PENNY",
    "NICKEL",
    "DIME",
    "QUARTER",
    "ONE",
    "FIVE",
    "TEN",
    "TWENTY",
    "ONE HUNDRED",
  ].reverse();
  let drawer = Array.from(cid); // à la base pour éviter de muter cid, mais inutile ne fonctionne pas sur array avec sous arrays
  let sumOfCash = 0;
  let numberOfPieces = {};
  let changedue = (cash - price).toFixed(2);
  let cashadded = cash;
  let status = "";
  let change_response = [];
  let changeBack = [];

  // Fonction pour formatter le résultat
  const finalStr = (status, change) => {
    return {
      status: status,
      change: change,
    };
  };
  // Calcul la somme initiale dans la caisse
  for (let i = drawer.length - 1; i > -1; i--) {
    sumOfCash += drawer[i][1];
  }

  if (sumOfCash < changedue) {
    return finalStr("INSUFFICIENT_FUNDS", change_response);
  }
  // Retourne tout le cash dans la caisse au client
  if (sumOfCash == changedue) {
    return finalStr("CLOSED", drawer);
  }

  for (let i = drawer.length - 1; i > -1; i--) {
    // this part is made to add cash to the cid
    while (cashadded >= CONVERSION_TABLE[i]) {
      sumOfCash += CONVERSION_TABLE[i];
      drawer[i][1] += CONVERSION_TABLE[i];
      cashadded -= CONVERSION_TABLE[i];
    }
    // give back change to the customer
    let y = i;
    while (changedue >= CONVERSION_TABLE[y] - 0.001) {
      if (drawer[y][1] >= CONVERSION_TABLE[y]) {
        changeBack.push([drawer[y][0], CONVERSION_TABLE[y]]);
        sumOfCash -= CONVERSION_TABLE[y];
        drawer[y][1] -= CONVERSION_TABLE[y];
        changedue -= CONVERSION_TABLE[y];
      } else {
        y--;
        if (y < 0) {
          return finalStr("INSUFFICIENT_FUNDS", change_response);
        }
      }
    }
  }
  sumOfCash = sumOfCash.toFixed(2);
  let newArray = [];
  INDEX_TABLE.forEach((item) => {
    let a = changeBack.filter((x) => x[0] == item);
    if (a.length > 0) {
      newArray.push([item, a.length * a[0][1]]);
    }
  });
  return finalStr("OPEN", newArray);
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
