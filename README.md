# Sequelize guide
Commands:
'''
  1. sequelize db:migrate                        Run pending migrations
  2. sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  3. sequelize db:migrate:status                 List the status of all migrations
  4. sequelize db:migrate:undo                   Reverts a migration
  5. sequelize db:migrate:undo:all               Revert all migrations ran
  6. sequelize db:seed                           Run specified seeder
  7. sequelize db:seed:undo                      Deletes data from the database
  8. sequelize db:seed:all                       Run every seeder
  9. sequelize db:seed:undo:all                  Deletes data from the database
  10. sequelize db:create                         Create database specified by configuration
  11. sequelize db:drop                           Drop database specified by configuration
  12. sequelize init                              Initializes project
  13. sequelize init:config                       Initializes configuration
  14. sequelize init:migrations                   Initializes migrations
  15. sequelize init:models                       Initializes models
  16. sequelize init:seeders                      Initializes seeders
  17. sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  18. sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  19. sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]
'''