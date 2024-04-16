/*
 * @Author: Cookie
 * @Description: 创建文档
 */

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle('User')
    .setDescription('')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/doc', app, document);
};
