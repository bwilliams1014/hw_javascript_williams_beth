var currentPresident = {
  firstName:'Donald',
  lastName:'Trump',
  termLength:4,
  party:'Republican',
  yearsOfPresidency:'2017 -'
};
var recentPresident1 = {
  firstName:'Barack',
  lastName:'Obama',
  termLength:8,
  party:'Democrat',
  yearsOfPresidency:'2009 - 2017'
};
var recentPresident2 = {
  firstName:'George W.',
  lastName:'Bush',
  termLength:8,
  party:'Republican',
  yearsOfPresidency:'2001 - 2009'
};
var recentPresident3 = {
  firstName:'Bill',
  lastName:'Clinton',
  termLength:8,
  party:'Democrat',
  yearsOfPresidency:'1993 - 2001'
};
var recentPresident4 = {
  firstName:'George H. W.',
  lastName:'Bush',
  termLength:4,
  party:'Republican',
  yearsOfPresidency:'1989 - 1993'
};

var presidents = [currentPresident, recentPresident1, recentPresident2, recentPresident3, recentPresident4];

console.log(presidents[2].firstName + " " + presidents[2].lastName);
