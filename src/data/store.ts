import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const defaultRoster: Roster = {
	army: '',
	units: [],
	enhancements: []
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

		if (unit.keywords.includes('Epic Hero')) {
			r.units.some((u) => u.name === unit.name)
				? console.log('Unit already exists in roster')
				: r.units.push(convertedUnit);

			return r;
		}

		const currentAmount = r.units.filter((u) => u.name === unit.name).length;
		const isBattleline = unit.keywords.includes('Battleline');

		if (isBattleline && currentAmount === 6) {
			return r;
		}

		if (!isBattleline && currentAmount === 3) {
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

		if (r.enhancements.some((e) => e.unitId === id)) {
			r.enhancements = r.enhancements.filter((e) => e.unitId !== id);
		}
		return r;
	});
};

export const addEnhancement = (enhancement: Enhancement, unitId: string) => {
	roster.update((r) => {
		if (r.enhancements.some((e) => e.unitId === unitId)) {
			return r;
		}

		r.enhancements.push({
			...enhancement,
			unitId
		});

		return r;
	});
};

export const removeEnhancement = (id: string) => {
	roster.update((r) => {
		r.enhancements = r.enhancements.filter((e) => e.unitId !== id);

		return r;
	});
};
