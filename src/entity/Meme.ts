import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("meme")
export class Meme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  name: string;

  @Column({ type: "text", nullable: false, unique: true })
  url: string;

  @Column({ type: "text", nullable: false, unique: true })
  caption: string;

  @CreateDateColumn()
  createdAt: string;
}
