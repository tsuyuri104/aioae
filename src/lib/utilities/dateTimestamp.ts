import type { Timestamp } from 'firebase/firestore';

export function toDateTypeFromTimestamp(timestamp: Timestamp): DateTimeInfo {
	return toDateType(timestamp.toDate());
}

export function toDateType(date: Date): DateTimeInfo {
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
	};
}

export function calcDiffDays(a: Date, b: Date): number {
	const diffTime = Math.abs(a.getTime() - b.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
}

export type DateTimeInfo = {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
};
