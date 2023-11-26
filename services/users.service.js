const { Order, User, Product } = require('../models');

class UsersService {
  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async getUserByIdWithOrders(id) {
    try {
      const user = await User.findByPk(id, {
        include: [{ model: Order}],
      });
      return user;
    } catch (error) {
      console.error("Error fetching user with orders:", error);
      throw new Error("Internal Server Error");
    }
  }
  

  static async createUser(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async updateUser(id, userData) {
    try {
      const [rowsUpdated, [updatedUser]] = await User.update(userData, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        throw new Error("User not found");
      }

      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Internal Server Error");
    }
  }

  static async deleteUserById(id) {
    try {
      const deletedUser = await User.destroy({
        where: { id },
      });

      if (!deletedUser) {
        throw new Error("User not found");
      }

      return { success: true };
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Internal Server Error");
    }
  }
}

module.exports = UsersService;
