import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetService {
  public getGreet(): string {
    return 'Hello World!';
  }
}
