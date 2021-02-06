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

  @Column({ type: "text", nullable: false })
  url: string;

  @Column({ type: "text", nullable: false })
  caption: string;

  @CreateDateColumn()
  createdAt: string;
}
