'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cats',
      [
        {
          name: 'Morris',
          age: 4,
          city: "Gomorrah",
          about_me: "Ripped Physique",
          looking_for: "Quiet quilting nights by the fire",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Boris',
          age: 4,
          city: "Gomorrah",
          about_me: "Ripped Physique",
          looking_for: "Quiet quilting nights by the fire",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Morris',
          age: 4,
          city: "Gomorrah",
          about_me: "Ripped Physique",
          looking_for: "Quiet quilting nights by the fire",
          createdAt: new Date(),
          updatedAt: new Date()

          name: 'Morris',
          age: 4,
          city: "Gomorrah",
          about_me: "Ripped Physique",
          looking_for: "Quiet quilting nights by the fire",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Uers', null, {})
  }
}
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
