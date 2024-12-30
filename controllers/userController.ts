import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";
import { route } from "express-extract-routes";

// Purpose: This controller class is responsible for handling the user related requests.
@route("/user")
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * @swagger
   * /user/get/{id}:
   *   get:
   *     summary: Get a user by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: The user ID
   *     responses:
   *       200:
   *         description: The user data
   *       404:
   *         description: User not found
   */
  @route.get("/get/:id")
  getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.getUser(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * @swagger
   * /user/get/all:
   *   get:
   *     summary: Get the users
   *     parameters:
   *         name: all
   *         required: true
   *         schema:
   *           type: string
   *         description: The all users
   *     responses:
   *       200:
   *         description: The user data
   *       404:
   *         description: User not found
   */
  @route.get("/get/all")
  getUsers = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  /**
   * @swagger
   * /user/get/create:
   *   get:
   *     summary: Create the user
   *     parameters:
   *       - in: path
   *         name: create
   *         required: true
   *         schema:
   *           type: string
   *         description: The user create
   *     responses:
   *       200:
   *         description: The user data
   *       404:
   *         description: User not found
   */
  @route.post("/create")
  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * @swagger
   * /user/get/update:
   *   get:
   *     summary: Update the user
   *     parameters:
   *       - in: path
   *         name: update
   *         required: true
   *         schema:
   *           type: string
   *         description: The update user
   *     responses:
   *       200:
   *         description: The user data
   *       404:
   *         description: User not found
   */
  @route.put("/update")
  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.updateUser(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * @swagger
   * /user/get/delete:
   *   get:
   *     summary: delete the user
   *     parameters:
   *       - in: path
   *         name: delete
   *         required: true
   *         schema:
   *           type: string
   *         description: The delete user
   *     responses:
   *       200:
   *         description: The user data
   *       404:
   *         description: User not found
   */
  @route.delete("/delete")
  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.userService.deleteUser(req.params.id);
      res.send("User deleted successfully");
    } catch (error) {
      next(error);
    }
  };

  /**
   * @swagger
   * /user/get/search:
   *   get:
   *     summary: search the user
   *     parameters:
   *       - in: path
   *         name: search
   *         required: true
   *         schema:
   *           type: string
   *         description: The search user
   *     responses:
   *       200:
   *         description: The user data
   *       404:
   *         description: User not found
   */
  @route.post("/search")
  search = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.searchUser(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
}
