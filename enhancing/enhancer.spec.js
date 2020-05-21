const enhancer = require('./enhancer.js');
// test away!

describe('success function', () => {
	const item1 = {
		name: 'window',
		durability: 10,
		enhancement: 20,
	};
	it('enhancement should be successful', () => {
		const successItem = enhancer.succeed(item1);
		expect(successItem.enhancement).toBeLessThanOrEqual(30);
	});
});
describe('fail function', () => {
	const item2 = {
		name: 'floor',
		durability: 10,
		enhancement: 13,
	};
	it('enhancement should be less than or equal to 20', () => {
		const successItem = enhancer.succeed(item2);
		expect(successItem.enhancement).toBeLessThanOrEqual(20);
	});
});
describe('repair', () => {
	const item3 = {
		name: 'door',
		durability: 100,
		enhancement: 13,
	};
	it('should return item with durability of 100', () => {
		const itemToRepair = enhancer.repair(item3);
		console.log(itemToRepair);
		expect(itemToRepair.durability).toBe(100);
	});
});
