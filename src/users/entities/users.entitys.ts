import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Posting } from "../../posting/entities/posting.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_users"})
export class User{

    @PrimaryGeneratedColumn()
    public id: number

    @IsNotEmpty()
    @Column({ length: 255 , nullable: false })
    public name: string

    @IsNotEmpty()
     @Column({ length: 255 , nullable: false })
    public username: string

    @IsEmail()
    @Column({ length: 255, nullable: false })
    public email: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({ length: 255, nullable: false })
    public password: string

    @Column ({ length: 5000 })
    public photo: string

    @OneToMany (() => Posting , (posting)  => posting.user)
    posting: Posting[]

}