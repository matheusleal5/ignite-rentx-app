import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database"; // Exatamente o nome do serviço criado no arquivo yaml
  createConnection({
    ...options,
  });
});
