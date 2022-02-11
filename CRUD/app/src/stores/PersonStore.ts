import { IPersonItem } from "../modals/IPerson";
import { action, makeObservable, observable } from "mobx"
import axios from "axios";

class PersonStore {
    personList: IPersonItem[];
    constructor() {
        makeObservable(this, {
            personList: observable,
            deletePerson: action,
            createPerson: action,
            editPerson: action,
            getPersonsAll: action
        })
        this.personList = [];
    }

    async getPersonsAll() {
        try {
            const response = await axios.get<IPersonItem[]>("http://localhost:6543/api/person");
            this.personList = response.data;
        } catch (error) {
            alert(error)
        }
    }

    async deletePerson(id: number) {
        try {
            await axios.delete<IPersonItem[]>(`http://localhost:6543/api/person/${id}`);
            this.personList = this.personList.filter(person => person.id !== id)
        } catch (error) {
            alert(error)
        }
    }

    async createPerson(person: IPersonItem) {
        try {
            await axios.post<IPersonItem[]>(`http://localhost:6543/api/person/`, {
                fullname: person.fullname,
                nickname: person.nickname,
                age: person.age,
                gender: person.gender
            });

            this.personList.push(person)
            this.getPersonsAll()

        } catch (error) {
            alert(error)
        }
    }

    async editPerson(person: IPersonItem) {
        try {
            await axios.put<IPersonItem[]>(`http://localhost:6543/api/person/`, {
                id: person.id,
                fullname: person.fullname,
                nickname: person.nickname,
                age: person.age,
                gender: person.gender
            });
            this.personList = this.personList.map(personItem => personItem.id === person.id ? { ...person } : personItem)

        } catch (error) {
            alert(error)
        }
    }
}
export default new PersonStore(); 