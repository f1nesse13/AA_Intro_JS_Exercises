const Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  console.log(`${this.owner} loves ${this.name}`);
}

Cat.prototype.meow = function () {
  console.log('MEOWW!!')
}

cat1 = new Cat("joey", "layla")
cat2 = new Cat("gracie", "lou")
cat3 = new Cat("bad cat", "lou")

cat3.meow = function () {
  console.log("MEW")
}

