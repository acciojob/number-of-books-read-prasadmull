const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead =library.filter((count) => {
  // write your code here
	let c=0;
	let read=count.readingStatus===true
	for(let key in read){
		c++;
	}
	return c;
});

// Do not change the code below

alert(numberOfBooksRead());
