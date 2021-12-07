export type TeamDetail = {
	id: number;
	name: string;
	icon: string;
};

export interface PlayerDetail {
	id: number;
	shortName: string;
	firstName: string;
	middleName?: string;
	lastName: string;
	birthDate?: string;
	birthArea: BirthArea;
	passportArea: PassportArea;
	role: Role;
	foot?: string;
	currentTeamId: number;
	image: string;
}

export interface BirthArea {
	id: number;
	alpha2code?: string;
	alpha3code?: string;
	name?: string;
	iconcode: string | '';
}

export interface PassportArea {
	id: number;
	alpha2code?: string;
	alpha3code?: string;
	name?: string;
	iconcode: string | '';
}

export interface Role {
	name: string;
	code2: string;
	code3: string;
}
