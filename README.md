# api
node.js express sequelize CRUD API

## Configuration
Remember to rename `config/db_config_example.json` to `config/db_config.json` and replace placeholder values

## Routes
Creating, reading, updating, and deleting users:
- `/api/user` GET, POST, DELETE
- `/api/user/:id` GET, PUT, DELETE
- `/api/user/all` GET

Creating, reading, updating, and deleting posts: 
- `/api/post` GET, POST, DELETE
- `/api/post/:id` GET, PUT, DELETE
- `/api/post/all` GET

Creating, reading, updating, and deleting threads: (doesn't work yet)
- `/api/thread` GET, POST, DELETE
- `/api/thread/:id` GET, PUT, DELETE
- `/api/thread/all` GET
