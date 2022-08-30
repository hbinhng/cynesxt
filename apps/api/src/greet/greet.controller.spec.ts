import { Test, TestingModule } from '@nestjs/testing';

import { GreetController } from './greet.controller';
import { GreetService } from './greet.service';

describe('GreetController', () => {
  let greetController: GreetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreetController],
      providers: [GreetService],
    }).compile();

    greetController = module.get<GreetController>(GreetController);
  });

  it('should return "Hello World!"', () => {
    expect(greetController.getHello().body).toBe('Hello World!');
  });
});
