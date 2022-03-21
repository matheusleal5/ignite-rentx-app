"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepositoryInMemory = void 0;

var _User = require("../../infra/typeorm/entities/User");

class UsersRepositoryInMemory {
  constructor() {
    this.users = [];
  }

  async create({
    name,
    email,
    password,
    driver_license
  }) {
    const user = new _User.User();
    Object.assign(user, {
      name,
      email,
      password,
      driver_license
    });
    this.users.push(user);
  }

  async findByEmail(email) {
    const user = this.users.find(user => user.email === email);
    return user;
  }

  async findById(id) {
    const user = this.users.find(user => user.id === id);
    return user;
  }

}

exports.UsersRepositoryInMemory = UsersRepositoryInMemory;