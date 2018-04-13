<template>
    <main class="firebase">
        <div class="tableOne">
            <h1>Displaying Single User</h1>
            <table>
                <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>{{ contact.first_name }}</th>
                    <th>{{ contact.last_name }}</th>
                    <th>{{ contact.description }}</th>
                    <th>{{ contact.email }}</th>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="tableTwo">
            <h1>Displaying Many Users</h1>
            <table>
                <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
                </thead>
                <tbody v-for="contact in contacts">
                <tr>
                    <th>{{ contact.first_name }}</th>
                    <th>{{ contact.last_name }}</th>
                    <th>{{ contact.description }}</th>
                    <th>{{ contact.email }}</th>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="content">
            <div class="text">
                Lorem Ipsem.
            </div>
        </div>
        <div class="more">
            <div class="text">Lorem Ipsem.</div>
        </div>
    </main>
</template>

<script>
  import fbw from '../Firebase/FirebaseWrapper'

  const db = fbw.db()

  export default {
    data () {
      return {
        contact: {},
        contacts: []
      }
    },
    mounted () {
      this.populateContact()
      this.populateContacts()
      this.removeContact('0005')
      this.addContact('0005', {
        'description': 'is silly ',
        'email': 'mr.bean@gmail.com',
        'first_name': 'Mr.',
        'last_name': 'Bean'
      })
    },
    methods: {
      populateContact () {
        const that = this
        fbw.fetchOne(db, 'contacts', '0002').then((v) => {
          that.contact = v
        })
      },
      populateContacts () {
        const that = this
        fbw.fetchAll(db, 'contacts').then((v) => {
          that.users = v
        })
      },
      removeContact (key) {
        const that = this
        fbw.removeOne(db, 'contacts', key).then(() => {
          that.populateContacts()
        })
      },
      addContact (key, contactData) {
        const that = this
        fbw.addOne(db, 'contacts', key, contactData).then(() => {
          that.populateContacts()
        })
      }
    }
  }
</script>

<style scoped>
    main.firebase > .tableOne {
        grid-row: 1 / 20;
        grid-column: 1 / 6;
        background-color: lightgray;
        color: teal;
        display: grid;
    }

    main.firebase > .tableOne > h1 {
        grid-column: 1 / 6;
        grid-row: 1 / 2;
    }

    main.firebase > .tableOne > table {
        grid-row: 2 / 20;
        grid-column: 1 / 6;
        display: grid;
    }

    main.firebase > .tableOne > table > thead {
        grid-row: 1 / 5;
        grid-column: 1 / 6;
        display: grid;
    }

    main.firebase > .tableOne > table > thead > tr {
        grid-row: 2;
        grid-column: 1 / 6;
        display: grid;
    }

    main.firebase > .tableOne > table > thead > tr > th {
        grid-row: 1;
        color: teal;
    }

    main.firebase > .tableOne > table > tbody {
        color: #32c3a2;
        grid-row: 5/20;
        grid-column: 1/6;
        display: grid;
    }

    main.firebase > .tableOne > table > tbody > tr {
        display: grid;
    }

    main.firebase > .tableOne > table > tbody > tr > th {
        color: #32c3a2;
        grid-row: 2;
        display: grid;
        font-size: 15px;
    }

    main.firebase > .tableTwo {
        grid-row: 20 /45;
        grid-column: 1 / 6;
        background-color: white;
        border-top: 1px dashed gray;
        display: grid;
    }

    main.firebase > .tableTwo > h1 {
        grid-column: 1 / 6;
        grid-row: 1 / 2;
    }

    main.firebase > .tableTwo > table {
        grid-row: 3 / 20;
        grid-column: 1 / 6;
        display: grid;
    }

    main.firebase > .tableTwo > table > thead {
        grid-row: 1 / 5;
        grid-column: 1 / 6;
        display: grid;
    }

    main.firebase > .tableTwo > table > thead > tr {
        grid-row: 2;
        grid-column: 1 / 6;
        display: grid;
    }

    main.firebase > .tableTwo > table > thead > tr > th {
        grid-row: 1;
        color: teal;
    }

    main.firebase > .tableTwo > table > tbody {
        color: #32c3a2;
        grid-row: 5/20;
        grid-column: 1/6;
        display: grid;
    }

    main.firebase > .tableTwo > table > tbody > tr {
        display: grid;
    }

    main.firebase > .tableTwo > table > tbody > tr > th {
        color: #32c3a2;
        grid-row: 2;
        display: grid;
        font-size: 15px;
    }

    main.firebase > .content {
        grid-row: 45 / 65;
        grid-column: 1 / 6;
        background-color: lightgray;
        color: teal;
        display: grid;
    }

    main.firebase > .content > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }

    main.firebase > .more {
        grid-row: 65 / 85;
        grid-column: 1 / 6;
        background-color: white;
        border-top: 1px dashed gray;
        display: grid;
    }

    main.firebase > .more > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }
</style>