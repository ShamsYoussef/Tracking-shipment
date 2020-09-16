export default class TrackedOrder {
	constructor(
		trackingNumber,
		promisedDate,
		currentStatus,
		lastUpdated,
		transitEvents
	) {
		this.trackingNumber = trackingNumber;
		this.promisedDate = promisedDate;
		this.currentStatus = currentStatus;
		this.lastUpdated = lastUpdated;
		this.transitEvents = transitEvents;
	}
}
