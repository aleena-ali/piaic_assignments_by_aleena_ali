let fname:string='aleena ali';
// let upperletter =fname.toUpperCase();
// console.log(upperletter);
let lowerletter =fname.toLowerCase();
//console.log(lowerletter);

const titleCase = fname.toLowerCase().split(' ');
  for (var i = 0; i < titleCase.length; i++) {
    titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1); 
  }
  console.log( titleCase.join(' '));