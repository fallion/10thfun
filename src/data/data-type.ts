type ArmyUnit = {
	name: string;
	costs: Array<[models: number, cost: number]>;
	keywords: string[];
};

type Army = {
	name: string;
	units: ArmyUnit[];
};

// Unit is a combination of ArmyUnit and some extra properties for use in the summary
type Unit = ArmyUnit & {
	id: string;
	selectedCost: number;
	selectedModelCount: number;
};

type Roster = {
	units: Unit[];
};

type Enhancement = {
	name: string;
	cost: number;
	requiredKeywords: string[];
};
