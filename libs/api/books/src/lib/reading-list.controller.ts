import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Book } from '@tmo/shared/models';
import { ReadingListService } from './reading-list.service';

@Controller()
export class ReadingListController {
  constructor(private readonly readingList: ReadingListService) {}

  @Get('/reading-list/')
  async getReadingList() {
    return await this.readingList.getList();
  }

  @Post('/reading-list/')
  async addToReadingList(@Body() item: Book) {
    return await this.readingList.addBook(item);
  }

  @Delete('/reading-list/:id')
  async removeFromReadingList(@Param() params) {
    return await this.readingList.removeBook(params.id);
  }

  @Put('/reading-list/:id')
  async finishBookFromReadingList(@Param() params, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return await this.readingList.finishBook(
      params.id,
      propertyName,
      propertyValue
    );
  }
}
