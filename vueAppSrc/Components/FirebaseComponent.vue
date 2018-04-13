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
                    <th>{{ contact.email }}</th>
                    <th>{{ contact.description }}</th>
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
                <tbody>
                <tr v-for="contact in contacts">
                    <th>{{ contact.first_name }}</th>
                    <th>{{ contact.last_name }}</th>
                    <th>{{ contact.email }}</th>
                    <th>{{ contact.description }}</th>
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
        'first_name': 'Mister',
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
          that.contacts = v
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
    .tableOne,
    .tableTwo,
    .more,
    .content,
    h1,
    table,
    table > thead,
    table > thead > tr,
    table > tbody,
    table > tbody > tr {
        grid-column: 1 / 6;
    }

    .tableOne,
    .tableTwo,
    .more,
    .content,
    table,
    table > thead,
    table > thead > tr,
    table > tbody,
    table > tbody > tr,
    table > tbody > tr > th {
        display: grid;
    }

    .tableOne, .tableTwo {
        grid-row: 1 / 20;
        background-color: lightgray;
        color: teal;
    }

    h1 {
        text-align: center;
        grid-row: 3 / span 1;
    }

    table {
        grid-row: 4/15;
    }

    table > thead {
        grid-row: span 1;
    }

    table > thead > tr {
        grid-row: 1;
    }

    table > thead > tr > th {
        grid-row: 1;
        color: teal;
    }

    table > tbody {
        color: #32c3a2;
        grid-row: 2 / 9;
    }

    table > tbody > tr {
        grid-row: span 1;
        grid-column: 1/6;
        grid-template-columns: repeat(4, 1fr);
    }

    table > tbody > tr > th {
        color: #32c3a2;
        grid-row: 1;
        text-align: center;
        font-size: 15px;
        grid-column: span 1;
    }

    main.firebase > .tableTwo {
        grid-row: 20 /45;
        background-color: white;
        border-top: 1px dashed gray;
    }

    .content {
        grid-row: 45 / 65;
        background-color: lightgray;
        color: teal;
    }

    .content > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }

    .more {
        grid-row: 65 / 85;
        background-color: white;
        border-top: 1px dashed gray;
    }

    .more > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }
</style>