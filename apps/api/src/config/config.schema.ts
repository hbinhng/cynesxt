export type ConfigSchema = {
  database: {
    host: string;
    port: number;
    user: string;
    password: string;
    name: string;
  };
  port: number;
};
