const data = {
  nutritionFacts: [
    {
      parameter: "NaCl",
      unit: "%",
      labResult: "95.54",
      sniStanding: "Min. 94.7",
    },
    {
      parameter: "Moisture Content",
      unit: "%",
      labResult: "2.06",
      sniStanding: "Max. 7.0",
    },
    {
      parameter: "Iodium as KIO3",
      unit: "mg/kg",
      labResult: "0",
      sniStanding: "Min. 30",
    },
    {
      parameter: "Sodium (Na)",
      unit: "%",
      labResult: "37.64",
      sniStanding: "n/a",
    },
    {
      parameter: "Magnesium (Mg)",
      unit: "mg/kg",
      labResult: "1,726.67",
      sniStanding: "n/a",
    },
    {
      parameter: "Calcium (Ca)",
      unit: "mg/kg",
      labResult: "6,478.61",
      sniStanding: "n/a",
    },
    {
      parameter: "Potassium (K)",
      unit: "mg/kg",
      labResult: "1,549.61",
      sniStanding: "n/a",
    },
    {
      parameter: "Sulfate (SO4)",
      unit: "%",
      labResult: "0.35",
      sniStanding: "n/a",
    },
  ],
  metalContamination: [
    {
      parameter: "Lead (Pb)",
      unit: "mg/kg",
      labResult: "Below 0.1",
      sniStanding: "Max. 10",
    },
    {
      parameter: "Copper (Cu)",
      unit: "mg/kg",
      labResult: "Below 0.03",
      sniStanding: "Max. 10",
    },
    {
      parameter: "Mercury (Hg)",
      unit: "mg/kg",
      labResult: "Below 0.001",
      sniStanding: "Max. 0.1",
    },
    {
      parameter: "Arsenic (As)",
      unit: "mg/kg",
      labResult: "Below 0.002",
      sniStanding: "Max. 0.1",
    },
  ],
};

// Fungsi untuk menambahkan data ke tabel
function populateTable(tableId, data) {
  const table = document.getElementById(tableId);
  data.forEach((row) => {
    const tr = document.createElement("tr");
    Object.values(row).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

// Isi tabel dengan data JSON
document.addEventListener("DOMContentLoaded", () => {
  populateTable("nutritionFactsTable", data.nutritionFacts);
  populateTable("metalContaminationTable", data.metalContamination);
});
