import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: "varchar";

    @Column()
    lead_id: "int";

    @Column()
    pipeline: "int";

    @Column()
    status: "int";

    @Column()
    state: "varchar";

    @Column()
    address: "varchar";

    @Column()
    name: "varchar";

    @Column()
    contact_name: "varchar";

    @Column()
    phone: "varchar";

    @Column()
    source: "varchar";

    @Column()
    date: "varchar";

    @Column()
    note: "varchar";

    @Column({
        default: '{}',
        transformer: {
            to(value: any): any {
                return JSON.stringify(value);
            },
            from(value: any): any {
                if (value === '') {
                    value = '{}';
                }
                let result;
                try {
                    result = JSON.parse(value);
                } catch (e) {
                    result = {};
                }
                return result;
            }
        }
    })
    materials: "json";

    @Column()
    createdon: "int";

}