import { Router } from "express";
import { meme } from "../controllers";
import { validators } from "../middlewares";

const router = Router();

/**
 * @swagger
 * definitions:
 *      Error:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 */

/**
 * @swagger
 * /memes:
 *      post:
 *          description: Creates a Meme
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              url:
 *                                  type: string
 *                              caption:
 *                                  type: string
 *                          required:
 *                              - name
 *                              - url
 *                              - caption
 *          responses:
 *              201:
 *                  description: Returns ID of posted meme
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: number
 *              409:
 *                  description: Duplicate meme exists
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref : '#/definitions/Error'
 *              500:
 *                  description: Internal Server Error
 */
router.post("/", validators.postMemeValidate, meme.postMemeController);



/**
 * @swagger
 * /memes:
 *      get:
 *          description: Returns Latest 100 Memes
 *          responses:
 *              200:
 *                  description: Returns array of memes
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Meme'
 *              500:
 *                  description: Internal Server Error
 */
router.get("/", meme.getMemesController);



/**
 * @swagger
 * /memes/{id}:
 *      get:
 *          description: Returns a meme by its ID
 *          parameters:
 *              - name: id
 *                in: path
 *                required: true
 *                description: The ID of the meme to return
 *                schema:
 *                  type: integer
 *                  format: int64
 *                  minimum: 1
 *          responses:
 *              200:
 *                  description: Successfully returns the meme with ID
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Meme'
 *              404:
 *                  description: Meme with ID doesnt exists
 *                  content:
 *                      application/json:
 *                          schema:
 *                                  $ref : '#/definitions/Error'
 *              500:
 *                  description: Internal Server Error
 */
router.get("/:id", validators.validateMemeId, meme.getMemeController);


/**
 * @swagger
 * /memes/{id}:
 *      patch:
 *          description: Update Meme using its ID
 *          parameters:
 *              - name: id
 *                in: path
 *                required: true
 *                description: The ID of the meme to return
 *                schema:
 *                  type: integer
 *                  format: int64
 *                  minimum: 1
 *          requestBody:
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              url:
 *                                  type: string
 *                              caption:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: Successfully returns the meme with ID
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Meme'
 *              404:
 *                  description: Meme with ID doesnt exists
 *                  content:
 *                      application/json:
 *                          schema:
 *                                  $ref : '#/definitions/Error'
 *              500:
 *                  description: Internal Server Error
 */
router.patch("/:id", validators.validateMemeId, meme.updateMemeController);

export default router;
