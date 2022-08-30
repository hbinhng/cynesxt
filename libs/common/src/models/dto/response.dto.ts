import { HttpStatus } from '@nestjs/common';

export type ResponseDto<BodyType> = {
  statusCode: HttpStatus;
  message?: string[] | string;
  body?: BodyType;
};
