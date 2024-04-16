import {
  Entity,
  Column,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // 自增主键
  id?: number;

  @Column({ default: null }) // 普通类型
  name: string;

  @UpdateDateColumn()
  updateTime?: string;

  @CreateDateColumn()
  createTime?: string;
}
