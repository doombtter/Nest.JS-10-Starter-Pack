import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column()
    userID: string;

    @Column()
    password: string;
}