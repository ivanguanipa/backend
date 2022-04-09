import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigracionUsuario1583873676081 implements MigrationInterface {
  name = 'MigracionUsuario1583873676081';

  public async up(queryRunner: QueryRunner): Promise<any> {
    const query =
      'CREATE TABLE IF NOT EXISTS `USUARIO` (`id` int NOT NULL AUTO_INCREMENT, ' +
      ' `nombre` varchar(255) NOT NULL, `clave` varchar(255) NOT NULL,' +
      ' `fechaCreacion` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB';
    await queryRunner.query(query, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE `USUARIO`', undefined);
  }
}
