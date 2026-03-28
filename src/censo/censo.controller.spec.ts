import { Test, TestingModule } from '@nestjs/testing';
import { CensoController } from './censo.controller';

describe('CensoController', () => {
  let controller: CensoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CensoController],
    }).compile();

    controller = module.get<CensoController>(CensoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
