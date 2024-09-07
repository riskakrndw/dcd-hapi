const routes = (handler) => [
  {
    method: "POST",
    path: "/users",
    handler: handler.postUserHandler,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: handler.getUserByIdHandler,
  },
  {
    method: "GET",
    path: "/hello",
    handler: handler.getHelloHandler,
  },
];

module.exports = routes;
