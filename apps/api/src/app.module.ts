import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ConfigKeys } from './config/config-keys';
import configModule from './config/config.module';
import { GreetModule } from './greet/greet.module';

@Module({
  imports: [configModule, GreetModule],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger('AppModule');

  public constructor(private readonly configService: ConfigService) {}

  public onModuleInit(): void {
    this.logger.verbose(
      `App is listening @::${this.configService.get<number>(ConfigKeys.PORT)}`,
    );
  }
}
