import invertObject from "@/utils/invertObject.js";

/**
 * Enum for different types of bedwetting.
 * @readonly
 * @enum {string}
 */
export const WettingType = {
	DRY: "dry",
	WOKE_UP_WET: "woke up wet, with no memory of wetting",
	WOKE_UP_AND_WET: "woke up to wet during night",
};

const wettingTypeReverseMap = invertObject(WettingType);

export class WettingEvent {
	/**
	 * The date the wetting event occured.
	 * @type {Date}
	 */
	date;

	/**
	 * The kind of wetting the event was.
	 * @type {WettingType}
	 */
	type;

	/**
	 * The user-provided note on the wetting event.
	 * @type {?string}
	 */
	note = null;

	constructor({
		date,
		type,
		note = null,
	}) {
		this.date = date;
		this.type = type;
		this.note = note;
	}

	toJSON() {
		return {
			date: this.date.toJSON(),
			type: wettingTypeReverseMap[this.type],
			note: this.note,
		};
	}

	static fromJSON(parsedJSON) {
		return new WettingEvent({
			date: new Date(parsedJSON.date),
			type: WettingType[parsedJSON.type],
			note: parsedJSON.note,
		});
	}

	/**
	 * Convert a JSON string to a WettingEvent object.
	 * 
	 * @param {string} json - the JSON string
	 * 
	 * @returns {WettingEvent}
	 */
	static fromJSONString(json) {
		const parsedJSON = JSON.parse(json);

		return WettingEvent.fromJSON(parsedJSON);
	}

	static listFromJSONString(json) {
		const parsedJSON = JSON.parse(json);

		return parsedJSON.map(
			(jsonWettingEvent) => WettingEvent.fromJSON(jsonWettingEvent),
		);
	}
}
