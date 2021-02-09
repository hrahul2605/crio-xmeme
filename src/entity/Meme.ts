/**
 * @swagger
 * components:
 *    schemas:
 *      Meme:
 *        properties:
 *          id:
 *            type: number
 *          url:
 *            type: string
 *          caption:
 *            type: string
 *          name:
 *            type: string
 *          createdAt:
 *            type: string
 *          updatedAt:
 *            type: string
 */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("meme")
export class Meme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  name: string;

  @Column({ type: "text", nullable: false })
  url: string;

  @Column({ type: "text", nullable: false })
  caption: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
