import { Test, TestingModule } from '@nestjs/testing';
import { CensoService } from './censo.service';

describe('CensoService', () => {
  let service: CensoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CensoService],
    }).compile();

    service = module.get<CensoService>(CensoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
