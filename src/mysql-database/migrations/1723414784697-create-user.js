module.exports = class CreateUser1723414784697 {
  async up(queryRunner) {
    await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`firstName\` varchar(255) NOT NULL,
                \`lastName\` varchar(255) NOT NULL,
                \`phone\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` (\`phone\`),
                UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  async down(queryRunner) {
    await queryRunner.query(`
            DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`users\`
        `);
    await queryRunner.query(`
            DROP TABLE \`users\`
        `);
  }
};
