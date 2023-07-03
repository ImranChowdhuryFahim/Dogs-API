import { createDog, getAllDogs } from "../controllers/dog.controller";
import { Router } from "express";
import { validate } from "../middlewares/validator.middleware";
import { createDogSchema, getAllDogsSchema } from '../validation';

const router = Router();




/**
 * @swagger
 * /dog:
 *   post:
 *     summary: Create a new dog
 *     tags: [Dog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/createDog'
 *     responses:
 *       201:
 *         description: Successfully Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                     type: string
 *               example:
 *                  message: Successfully created a new dog
 *       403:
 *         description: Already Exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                     type: string
 *               example:
 *                  message: A dog already exist with this name
 *       500:
 *         description: Server side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                     type: string
 *               example:
 *                  message: Something went wrong
 * definitions:
 *   createDog:
 *     type: object
 *     required:
 *        - name
 *        - color
 *        - tail_length
 *        - weight
 *     properties:
 *         name:
 *           type: string
 *         color:
 *           type: string
 *         tail_length:
 *           type: number
 *         weight:
 *           type: number
 */
router.post("/dog", validate(createDogSchema), createDog);

/**
 * @swagger
 * /dogs:
 *   get:
 *     summary: Get Dogs
 *     tags: [Dog]
 *     security:
 *        - ApiKeyAuth: []
 *     parameters:
 *        - in: query
 *          name: attribute
 *          schema:
 *             type: string
 *          required: false
 *        - in: query
 *          name: order
 *          schema:
 *              type: string
 *          required: false
 *        - in: query
 *          name: pageSize
 *          schema:
 *              type: number
 *          required: false
 *        - in: query
 *          name: pageNum
 *          schema:
 *              type: number
 *          required: false
 *     responses:
 *       200:
 *         description: Successfully retrieved Dog's info
 *       500:
 *         description: Server side error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                     type: string
 *               example:
 *                  message: Something went wrong
 */
router.get("/dogs", validate(getAllDogsSchema), getAllDogs);

export default router;