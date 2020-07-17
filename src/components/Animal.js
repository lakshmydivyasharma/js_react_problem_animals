class Animal {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

  setRank = (updatedRank) => {   //class of animal, and thats represented by this the this keyword is referancing the animal class   setrank is a property of the animal obkcet    all instances of the animal class will ahve the following properties, one which is set rank
    console.log("setting rank to", updatedRank)
    this.rank = updatedRank //setting thisrank to the argument
  } // making a function that is a class method that allows to update the rank
}

export default Animal;
