import axios from "axios";
import { IPersonItem } from "../modals/IPerson";
import PersonStore from "../stores/PersonStore";


class PersonRequests {

    public async getPersonsAll() {
        try {
            const response = await axios.get<IPersonItem[]>("http://localhost:6543/api/person");
            PersonStore.setPersonList(response.data);
        } catch (error) {
            alert(error)
        }

    }
    public async deletePerson(id: number) {
        try {
            await axios.delete<IPersonItem[]>(`http://localhost:6543/api/person/${id}`);
            PersonStore.deletePerson(id);
        } catch (error) {
            alert(error)
        }


    }

    public async createPerson(person: IPersonItem) {
        try {
            await axios.post<IPersonItem[]>(`http://localhost:6543/api/person/`, {
                fullname: person.fullname,
                nickname: person.nickname,
                age: person.age,
                gender: person.gender
            });

            PersonStore.createPerson(person)
            this.getPersonsAll()

        } catch (error) {
            alert(error)
        }
    }

    public async editPerson(person: IPersonItem) {
        try {
            await axios.put<IPersonItem[]>(`http://localhost:6543/api/person/`, {
                id: person.id,
                fullname: person.fullname,
                nickname: person.nickname,
                age: person.age,
                gender: person.gender
            });
            PersonStore.updatePerson(person)

        } catch (error) {
            alert(error)
        }

    }



}
export default new PersonRequests();