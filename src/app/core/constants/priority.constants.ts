export interface IPriority {
	level: PriorityLevel;
	label: string;
	color: string;
	activeColor: string;
}

export enum PriorityLevel {
	Low = 'low',
	Medium = 'medium',
	High = 'high'
}

export const Priorities: Record<PriorityLevel, IPriority> = {
	[PriorityLevel.Low]: {
		level: PriorityLevel.Low,
		label: 'Gering',
		color: 'bg-green-500',
		activeColor: 'bg-green-700'
	},
	[PriorityLevel.Medium]: {
		level: PriorityLevel.Medium,
		label: 'Mittel',
		color: 'bg-amber-500',
		activeColor: 'bg-amber-700'
	},
	[PriorityLevel.High]: {
		level: PriorityLevel.High,
		label: 'Hoch',
		color: 'bg-red-500',
		activeColor: 'bg-red-700'
	}
};
