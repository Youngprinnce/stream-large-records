import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ nullable: false })
  name: string;

  @Column({
    type: 'float',
    nullable: false,
  })
  price: number;

  @Column({ type: 'text' })
  description: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
