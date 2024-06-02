import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller({
  version: '1',
  path: 'posts',
})
@ApiTags('App controller')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @ApiOperation({ summary: 'Get cat 1', tags: ['1'] })
  getHello(): string {
    return 'version 1';
  }
  @Get()
  @ApiOperation({ summary: 'Get cat 2', tags: ['2'] })
  v2GetHello(): string {
    return 'version 2';
  }
}
