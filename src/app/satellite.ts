export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	static type: string;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	// isSpaceDebris(data: string): boolean {
	// 	if (data === "Space Debris") {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }	
   

}

// TODO 3a: fix isSpaceDebris check
