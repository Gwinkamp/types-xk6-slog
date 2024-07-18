declare module "k6/x/slog" {
  export type LoggerOpts = {
    output?: 'console' | 'file';
    format?: 'json' | 'text';
    level?: 'debug' | 'info' | 'warn' | 'error';
    filepath?: string;
  }

  export class Logger {
    constructor(opts?: LoggerOpts);
    public debug(message: string, fields?: Record<string, any>): void;
    public info(message: string, fields?: Record<string, any>): void;
    public warn(message: string, fields?: Record<string, any>): void;
    public error(message: string, fields?: Record<string, any>): void;
  }
}