import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const defaultRoster: Roster = {
	units: []
};

export const roster = writable(defaultRoster);

export const addUnit = (unit: ArmyUnit) => {
	roster.update((r) => {
		const convertedUnit: Unit = {
			...unit,
			id: uuidv4(),
			selectedCost: unit.costs[0][1],
			selectedModelCount: unit.costs[0][0]
		};

		if (unit.isUnique) {
			r.units.some((u) => u.name === unit.name)
				? console.log('Unit already exists in roster')
				: r.units.push(convertedUnit);

			return r;
		}

		const currentAmount = r.units.filter((u) => u.name === unit.name).length;

		if (currentAmount === 3) {
			return r;
		}

		r.units.push(convertedUnit);
		return r;
	});
};

export const selectSize = (id: string, size: number, cost: number) => {
	roster.update((r) => {
		const unit = r.units.find((u) => u.id === id);

		if (!unit) {
			return r;
		}

		unit.selectedCost = cost;
		unit.selectedModelCount = size;

		return r;
	});
};

export const removeUnit = (id: string) => {
	roster.update((r) => {
		r.units = r.units.filter((u) => u.id !== id);
		return r;
	});
};
