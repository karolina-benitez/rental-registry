import {action, observable, decorate} from 'mobx';
import React from 'react';

/*
How to interface with this store:
import {inject, observer} from 'mobx-react';

const MyClassName = inject('store')(observer(class MyClassName extends Component {
    ...
    this.props.store.callMethodOnStore();
    ...
    const variableFromStore = this.props.store.variableFromStore;
    ...
}));

export default MyClassName;
 */

export default class RentalDataStore {
    // Owner data
    ownerFirstName = null;
    ownerLastName = null;
    ownershipType = null;
    yearOfAcquisition = null;

    // Rental property data
    streetAddress = null;
    city = null;
    state = null;
    zipCode = null;
    hasMultipleUnits = false;

    // Unit data
    unitData = [];

    storeOwnerAndPropertyData(data) {
        this.ownerFirstName = data.firstName;
        this.ownerLastName = data.lastName;
        this.ownershipType = data.ownershipType;
        this.yearOfAcquisition = data.yearOfAcquisition;
        this.streetAddress = data.streetAddress;
        this.city = data.city;
        this.state = data.state;
        this.zipCode = data.zipCode;
    }

    setHasMulitipleUnits(event) {
        this.hasMultipleUnits = event.hasMultipleUnits;
    }

    addRentalUnit(data) {
        this.unitData.push(new RentalUnitData(data));
    }

    sendDataToNetlify() {
        const form = (
            <form name="rental-data" method="POST" data-netlify="true">
                <input type="text" name="first-name" value={this.ownerFirstName} />
                <input type="text" name="last-name" value={this.ownerLastName} />
                <input type="text" name="ownership-type" value={this.ownershipType} />
                <input type="number" name="year-of-acquisition" value={this.yearOfAcquisition} />
                <input type="text" name="street-address" value={this.streetAddress} />
                <input type="text" name="city" value={this.city} />
                <input type="text" name="state" value={this.state} />
                <input type="number" name="zip-code" value={this.zipCode} />
                {this.unitData.map((unit, index) => (
                    <div>
                        <input type="number" name={`unit-${index+1}-num-beds`} value={unit.numBeds} />
                        <input type="number" name={`unit-${index+1}-num-baths`} value={unit.numBaths} />
                        <input type="text" name={`unit-${index+1}-occupancy-status`} value={unit.occupancyStatus} />
                        <input type="month" name={`unit-${index+1}-occupancy-start-month`} value={unit.occupancyStartMonth} />
                        <input type="number" name={`unit-${index+1}-occupancy-start-year`} value={unit.occupancyStartYear} />
                        <input type="number" name={`unit-${index+1}-num-months-rented`} value={unit.numMonthsRentedLastYear} />
                        <input type="number" name={`unit-${index+1}-num-vacancy-days`} value={unit.numVacancyDaysLastYear} />
                        <input type="number" name={`unit-${index+1}-jan-rent-amount`} value={unit.rentAmountJanuary} />
                        <input type="number" name={`unit-${index+1}-jan-utility-amount`} value={unit.utilityAmountJanuary} />
                        <input type="month" name={`unit-${index+1}-effective-month`} value={unit.effectiveMonth} />
                        <input type="date" name={`unit-${index+1}-effective-date`} value={unit.effectiveDate} />
                        <input type="number" name={`unit-${index+1}-increase-amount`} value={unit.increaseAmount} />
                        <input type="number" name={`unit-${index+1}-num-evicted`} value={unit.numTenantsEvicted} />
                        <input type="text" name={`unit-${index+1}-eviction-reasons`} value={unit.evictionReasons} />
                    </div>
                ))}
            </form>
        );
        form.submit();
    }
}

decorate(RentalDataStore, {
    ownerFirstName: observable,
    ownerLastName: observable,
    ownershipType: observable,
    yearOfAcquisition: observable,
    streetAddress: observable,
    city: observable,
    state: observable,
    zipCode: observable,
    hasMultipleUnits: observable,
    unitData: observable,
    storeOwnerAndPropertyData: action,
    setHasMulitipleUnits: action,
    addRentalUnit: action,
    sendDataToNetlify: action,
});

class RentalUnitData {
    // Occupancy data
    numBeds = null;
    numBaths = null;
    occupancyStatus = null;
    occupancyStartMonth = null;
    occupancyStartYear = null;
    numMonthsRentedLastYear = null;
    numVacancyDaysLastYear = null;
    rentAmountJanuary = null;
    utilityAmountJanuary = null;

    // Rent Increase & Eviction Data
    effectiveMonth = null;
    effectiveDate = null;
    increaseAmount = null; // Positive value indicates increase; negative value indicates decrease
    numTenantsEvicted = null;
    evictionReasons = null;

    constructor(data) {
        this.numBeds = data.numBeds;
        this.numBaths = data.numBaths;
        this.occupancyStatus = data.occupancyStatus;
        this.occupancyStartMonth = data.occupancyStartMonth;
        this.occupancyStartYear = data.occupancyStartYear;
        this.numMonthsRentedLastYear = data.numMonthsRentedLastYear;
        this.numVacancyDaysLastYear = data.numVacancyDaysLastYear;
        this.rentAmountJanuary = data.rentAmountJanuary;
        this.utilityAmountJanuary = data.utilityAmountJanuary;
        this.effectiveMonth = data.effectiveMonth;
        this.effectiveDate = data.effectiveDate;
        this.increaseAmount = data.increaseAmount;
        this.numTenantsEvicted = data.numTenantsEvicted;
        this.evictionReasons = data.evictionReasons;
    }
}
