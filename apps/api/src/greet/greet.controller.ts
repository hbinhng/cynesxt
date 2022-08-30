import { ResponseDto } from '@/common/models/dto/response.dto';
import { Controller, Get, HttpStatus } from '@nestjs/common';
import { GreetService } from './greet.service';

@Controller('/api/greet')
export class GreetController {
  public constructor(private readonly greetService: GreetService) {}

  @Get()
  public getHello(): ResponseDto<string> {
    return {
      statusCode: HttpStatus.OK,
      body: this.greetService.getGreet(),
    };
  }
}
