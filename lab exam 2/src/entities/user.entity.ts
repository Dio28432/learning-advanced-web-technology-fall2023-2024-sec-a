import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('user')
export class User {
    @PrimaryGeneratedColumn({ name: 'id', type: "int" })
    id: number;

    @Column({ name: 'fullName', type: 'varchar', nullable: false })
    fullName: string;

    @Column({ name: 'userName', type: 'varchar', unique: true, nullable: false })
    userName: string;

    @Column({ name: 'email', unique: true, nullable: false })
    email: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @Column({ name: 'address', type: 'varchar', nullable: false })
    address: string;

    @Column({ name: 'companyName', type: 'varchar', nullable: false })
    companyName: string;

    @Column({ name: 'phoneNumber', type: 'int', nullable: false })
    phoneNumber: number;

    @Column({ name: 'city', type: 'varchar', nullable: false })
    city: string;

    @Column({ name: 'country', type: 'varchar', nullable: false })
    country: string;

}
