import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarsAlterFineAmountColumn1645786150759
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE cars RENAME COLUMN file_amount TO fine_amount"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE cars RENAME COLUMN fine_amount TO file_amount"
    );
  }
}
