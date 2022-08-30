import { Test, TestingModule } from '@nestjs/testing';

import { GreetService } from './greet.service';

describe('GreetService', () => {
  let greetService: GreetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreetService],
    }).compile();

    greetService = module.get<GreetService>(GreetService);
  });

  it('should return "Hello World!"', () => {
    expect(greetService.getGreet()).toBe('Hello World!');
  });
});
