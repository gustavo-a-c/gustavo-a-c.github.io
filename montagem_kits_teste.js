
const XLSX = require('xlsx');

const arquivo = XLSX.readFile('base_dados.xlsx');
const nome_aba = arquivo.SheetNames[0];
const aba = arquivo.Sheets[nome_aba];
const jsonData = XLSX.utils.sheet_to_json(aba, {header: 1});

lista_bidimensional = jsonData.map(row => Object.values(row));
console.log(lista_bidimensional)