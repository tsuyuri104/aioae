import {
	CameraOutlineIcon,
	EditOutlineIcon,
	GithubOutlineIcon,
	HeartOutlineIcon,
	ShoppingCartOutlineIcon,
	TwitterOutlineIcon,
	VideoOutlineIcon
} from '@robakk08/svelte-evaicons';
import type { Common, Lang } from './common';

export type Links = Common & {
	url: string;
	title: Lang;
	description: Lang;
	category: CategoryTypes;
	icon: IconTypes;
};

export type IconTypes =
	| undefined
	| 'Twitter'
	| 'Github'
	| 'Video'
	| 'ShoppingCart'
	| 'Edit'
	| 'Camera'
	| 'Heart';

export const IconComponents = new Map<IconTypes, any>([
	['Twitter', TwitterOutlineIcon],
	['Github', GithubOutlineIcon],
	['Video', VideoOutlineIcon],
	['ShoppingCart', ShoppingCartOutlineIcon],
	['Edit', EditOutlineIcon],
	['Camera', CameraOutlineIcon],
	['Heart', HeartOutlineIcon]
]);

export type CategoryTypes = undefined | 'SNS' | 'Programming';
