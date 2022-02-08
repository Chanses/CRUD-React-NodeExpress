import { IPersonItem } from "../modals/IPerson";
import { action, makeObservable, observable } from "mobx"

class Person {
    personList: IPersonItem[];
    constructor() {
        makeObservable(this, {
            personList: observable,
            setPersonList: action,
            deletePerson: action,
            createPerson: action,
            updatePerson: action
        })
        this.personList = [];

    }

    setPersonList(list: IPersonItem[]) {
        this.personList = list;
    }
    deletePerson(id: number) {
        return this.personList = this.personList.filter(person => person.id !== id)
    }
    createPerson(person: IPersonItem) {
        this.personList.push(person)
    }
    updatePerson(person: IPersonItem) {
        this.personList = this.personList.map(personItem => personItem.id === person.id ? { ...person } : personItem)
    }

}
export default new Person(); 