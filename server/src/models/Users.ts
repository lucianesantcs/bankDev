import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;
  
  @Column()
  password: string;
  
  @Column()
  email: string;
  
  @Column()
  birthdate: string;
}