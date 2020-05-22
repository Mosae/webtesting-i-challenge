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
		expect(successItem.enhancement).toEqual(20);
	});
});
describe('fail function', () => {
	const item2 = {
		name: 'floor',
		durability: 100,
		enhancement: 14,
	};
	it('should return new item with durability decrerase by 5', () => {
		const failItem = enhancer.fail(item2);
		expect(failItem.durability).toEqual(95);
	});
});
describe('fail function 2', () => {
	const item2 = {
		name: 'floor',
		durability: 100,
		enhancement: 15,
	};
	it('should return new item with durability decrerase by 10', () => {
		const failItem = enhancer.fail(item2);
		expect(failItem.durability).toEqual(90);
	});
});

describe('fail function 3', () => {
	const item2 = {
		name: 'floor',
		durability: 100,
		enhancement: 19,
	};
	it('should return new item with durability decrerase by 1', () => {
		const failItem = enhancer.fail(item2);
		expect(failItem.durability).toEqual(99);
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
		expect(itemToRepair.durability).toEqual(100);
	});
});
