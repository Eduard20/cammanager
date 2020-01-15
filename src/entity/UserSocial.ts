import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserSocial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tg_id: "varchar";

    @Column()
    username: "varchar";

    @Column()
    full_name: "varchar";

    @Column()
    tech_name: "varchar";

    @Column()
    last_name: "varchar";

    @Column()
    bridge: "varchar";

    @Column()
    driver: "varchar";

    @Column()
    type: "varchar";

    @Column()
    createdon: "int";

    // @Column({
    //     default: '{}',
    //     transformer: {
    //         to(value: any): any {
    //             return JSON.stringify(value);
    //         },
    //         from(value: any): any {
    //             if (value === '') {
    //                 value = '{}';
    //             }
    //             let result;
    //             try {
    //                 result = JSON.parse(value);
    //             } catch (e) {
    //                 result = {};
    //             }
    //             return result;
    //         }
    //     }
    // })
    // sheets: "json";

}