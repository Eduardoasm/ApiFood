/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipes, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanesa', summary:"hola"
};

describe('Recipe routes', () => {
before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipes.sync({ force: true })
    .then(() => Recipes.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
    it('should get 404', () =>
      agent.get('/recipess').expect(404)
    );

    it('should get 200 if have id for params if /recipes:id', () =>agent.get('/recipes/716426').expect(200)
    );
    it('should get 400 if id doesnt exist', () =>agent.get('/recipes/716426544').expect(400)
    );
    
    it('should get 200 if have name for query if /recipes?name=', () =>agent.get('/recipes?name=milanesa').expect(200)
    );
    it('should get 400 if name doestn exist', () =>agent.get('/recipes?name=milanesapor2').expect(400)
    );

});
})












































// const addPost = (post) => {
//   return req('POST', 200, post).then((newPost) => {
//     expect(newPost).to.have.property('author').that.equals(post.author);
//     expect(newPost).to.have.property('title').that.equals(post.title);
//     expect(newPost).to.have.property('contents').that.equals(post.contents);
//     expect(newPost).to.have.property('id').that.is.a('number');

    // We do this so the post object is always up-to-date. It can then be
    // compared to the existing posts during a subsequent get request.
//     post.id = newPost.id;
//     return post;
//   });
// }; 


// describe('Request', () => {
//   beforeEach(() => {
    // Reset posts before each test. Note that we must modify the array inline,
    // not reassign the array.
//     server.posts.splice(0, server.posts.length);
//   });
// })
// describe('Recipe request', ()=>{
//   it('Agrega un nuevo Post', () => {
//     const post = { name: 'arepa', summary: 'harina de trigo', healthScore: 50, steps: 'paso1, paso2', diets:['ketogenic'] };
//     return addPost(post)
//     .then((postReturned) => {
//     expect(postReturned).to.deep.equal(post);
//         });
//     });
// })

// describe("GET /recipes", ()=>{
//   test("should respond with 200 status code", async ()=> {
//     const response = await session(app).get("/recipes").send();
//     expect(response.statusCode).toBe(200)
//   })
// })