import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './time-block.controller'
import { UserService } from './time-block.service'

describe('UserController', () => {
	let controller: UserController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [UserService]
		}).compile()

		controller = module.get<UserController>(UserController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
