import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Role } from "src/interfaces/role.enum";

export class User {
  id: number;
  username: string;
  password: string;
  role: Role;
}

  @Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  role: Role;
}