const enhancer = require('./enhancer.js');
// test away!
describe('enhancement functionality', () => {
	describe('repair', () => {
		const item = {
			name: 'test',
			durability: 100,
			enhancement: 55,
		};
		it('should return a new item with name durbility & enhancement', () => {
			const itemToRepair = enhancer.repair(item);
			expect(itemToRepair.durability).toBe(100);
		});
	});
});
