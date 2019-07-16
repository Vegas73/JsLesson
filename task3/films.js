const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];


const oscarFilter = films.filter(function(film, i, films) { 
    return film.director.oscarsCount == 0; 
 });
const actorFilter = {};
  oscarFilter.forEach(function(film, i, films) {
       film.actors.forEach(function(actor, i, actors) {
           actorFilter[actor.name] = actor;
      });
   });

const ageSum = Object.keys(actorFilter).reduce(function(sum, actorKey) {
        return sum + actorFilter[actorKey].age;
    }, 0);
const actorsCount = Object.keys(actorFilter).length;
const result1 = +(ageSum / actorsCount).toFixed(2);

console.log(result1);

function TomHanks(actor) {
    return actor.name === 'Tom Hanks';
}

const yearFilter = films.filter(function(film, i, films) {
    return film.creationYear > 1995;
});

const tomHanksFilter = yearFilter.filter(function(film, i, films) {
    return film.actors.some(TomHanks);
});

const actorsNames = [];
tomHanksFilter.forEach(function(film, i, films) {
    film.actors.forEach(function(actor, i, actors) {
        if (!TomHanks(actor)) {
            actorsNames.push(actor.name);
        }
    });
});

console.log(actorsNames);

const ageFilter= films.filter(function(film, i, films) {
  return film.director.age < 70;
});

const tomHanksFiltered = ageFilter.filter(function(film, i, films) {
  return !film.actors.some(TomHanks);
});

let result3 = tomHanksFiltered.reduce(function(sum, film) {
const budget = +film.budget.replace(/\D/g, '');
  return sum + budget;
}, 0);

console.log(result3);



























