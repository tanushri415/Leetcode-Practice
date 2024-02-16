const grades = [99, 83, 87, 91, 77];

const underEighty = grades.find((grade) => grade < 80);
console.log(underEighty);

const students = [
    { name: 'John', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 94 },
];

//Challenge 1;
// Sort the array of students based on their grade,
// in descending order( largest to smallest).

//solution 1;
const sortedArray = students.sort((a, b) => b.grade - a.grade);
console.log(sortedArray);

// Chalenge 2
// After sorting , reverse the order of the array.

const reverseArray = [...sortedArray];
console.log(reverseArray.reverse());
console.log(students);

// Challenge 3
//Find a student in the array who has a grade over 90.

const overNinety = students.find((student) => student.grade > 90);
console.log(overNinety);


const bowlingScores = [154, 204, 300, 184, 286];

// Challenge 1
// Does the array include a score of 300?

const includesScore = bowlingScores.includes(300);
console.log('perfect score', includesScore);

//is every score an even number 
const everyScore = bowlingScores.every((score) => score % 2 === 0);
console.log(everyScore);


const ages = [18, 33, 71, 29, 65, 62];
ages.unshift(36);
console.log(ages);


const holidays = ['labor day', 'christmas', 'Diwali', 'Holi'];
const shiftedValue = holidays.shift();
console.log(shiftedValue);
console.log(holidays);


const foods = [
    { food: 'raspberries', type: 'fruit' },
    { food: 'orange', type: 'fruit' },
    { food: 'broccoli', type: 'vegetable' },
    { food: 'quinoa', type: 'grain' },
];
const blackbeans = { food: 'black beans', type: 'legume' };
const chiaSeeds = { food: 'chia seeds', type: 'seed' };

foods.pop();
console.log('Poppd', foods);

foods.shift();
console.log(foods);

foods.unshift(blackbeans);
console.log('unshifted', foods);

foods.push(chiaSeeds);
console.log('push', foods);


// map(); filter(); reduce();

const movies = [
    {
        title: 'Avatar',
        year: '2009',
        rating: 'PG-13'
    },
    {
        title: 'I Am Legend',
        year: '2007',
        rating: 'PG-13'
    },
    {
        title: 'The Avengers',
        year: '2012',
        rating: 'PG-13'
    },
    {
        title: '300',
        year: '2006',
        rating: 'R'
    },
    {
        title: 'The Wolf of Wallstreet',
        year: '2013',
        rating: 'R'
    }
];

//Challenge 1
// Create a new array that just contains the movie titles.
const movieTitles = movies.map((movie) => movie.title);
console.log('Movie Titles', movieTitles);

// Challenge 2
// Create a new array that contain sonly those movies that are PG-13
const pg13Movies = movies.filter((movie) => movie.rating === 'PG-13');
console.log('PG-13 Movies', pg13Movies);

// Challenge 3
// Create a new array that contains only R rating 
const ratedRMovies = movies.reduce((acc, movie) => {
    if (movie.rating === 'R') {
        acc++;
    }
    return acc;
}, 0);
console.log('Rated R Movies', ratedRMovies);