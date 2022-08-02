const { Recipes, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipes.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipes.create({ name: 'Milanesa a la napolitana' });
      });
      it('should throw an error if summary is null', (done) => {
        Recipes.create({})
          .then(() => done(new Error('It requires a valid summary')))
          .catch(() => done());
      });
      it('should throw an error if healthScore not is a number', (done) => {
        Recipes.create({healthScore: "hola"})
          .then(() => done(new Error('healthScore need be a number 0 to 100')))
          .catch(() => done());
      });
      it('should work when its a valid step', () => {
        Recipes.create({ step: "paso1, paso2" });
      });
    });
  });
});
