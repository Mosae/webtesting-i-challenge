module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	if (item.enhancement == 20) {
		return { ...item };
	} else if (item.enhancement < 20 && item.enhancement > 0) {
		item.enhancement++;
	}
	return { ...item };
}

function fail(item) {
	if (item.enhancement < 15) {
		item.durability -= 5; //decreased by 5
	} else if (item.enhancement > 16) {
		item.durability--;
	} else if (item.enhancement >= 15) {
		item.durability -= 10;
	}
	return { ...item };
}

function repair(item) {
	item.durability = 100;
	return { ...item };
}

function get(item) {
	return { ...item };
}
