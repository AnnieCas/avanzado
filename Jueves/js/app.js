(function(){
'use strict';

angular
.module("myApp",[])
.controller("movieCtrl", movieCtrl);

function movieCtrl() {
  var movie = this;

  //movie.nombre=[{'nombre':'Annie', 'edad':19},{'nombre':'Martin','edad':19}];

  movie.collection = [
{
  'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BNTU1OTg1MTc3OV5BMl5BanBnXkFtZTcwMjI0OTc5MQ@@._V1_.jpg',
  'name':'Marley y yo',
  'cast': ['Owen Wilsn', 'Jennifer Aniston'],
  'year':'2012',
  'category':'love'
},
{
  'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxMDA2MjM4NDReQTJeQWpwZ15BbWU3MDE0NTgxMTM@._V1_UY268_CR2,0,182,268_AL_.jpg', 'name':'Hachi',
  'cast': ['Joan Allen', 'Jennifer Aniston'],
  'year':'2008',
  'category':'love'
},
{
  'img':'https://images-na.ssl-images-amazon.com/images/M/MV5BYjU1MWMzN2ItMmFjNS00YzBjLWE4NGItY2VhOWVlNTczYWEyL2ltYWdlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg', 'name':'Rock dog',
  'cast': ['Joan Allen', 'Jennifer Aniston'],
  'year':'2010',
  'category':'aventures'
 }
];
}

})();
