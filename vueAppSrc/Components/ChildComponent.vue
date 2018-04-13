<template>
    <main class="child">
        <div class="table">
            <h1>Displaying Prepopulated Data</h1>
            <table>
                <thead>
                <tr>
                    <th>
                        Phone Number
                    </th>
                    <th>
                        Country
                    </th>
                </tr>
                </thead>
                <tbody v-for="example in hardcoded">
                <tr>
                    <th>{{ example.pnumber }}</th>
                    <th>{{ example.country }}</th>
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
  export default {
    data () {
      return {
        hardcoded: []
      }
    },

    mounted () {
      this.prePopulateHardcodedData()
    },

    methods: {
      prePopulateHardcodedData () {
        this.hardcoded = [{
          'pnumber': '111-111-1111',
          'country': 'EU'
        }, {
          'pnumber': '222-222-2222',
          'country': 'USA'
        }, {
          'pnumber': '333-333-3333',
          'country': 'China'
        }, {
          'pnumber': '444-444-4444',
          'country': 'Ukraine'
        }]
      }
    }
  }
</script>

<style scoped>
    main.child > .table {
        grid-row: 1 / 30;
        grid-column: 1 / 6;
        display: grid;
    }

    main.child > .table > h1 {
        grid-column: 1 / 6;
        grid-row: 1 / 2;
    }

    main.child > .table > table {
        grid-row: 2 / 20;
        grid-column: 1 / 6;
        display: grid;
    }

    main.child > .table > table > thead {
        grid-row: 1 / 5;
        grid-column: 1 / 6;
        display: grid;
    }

    main.child > .table > table > thead > tr {
        grid-row: 2;
        grid-column: 1 / 6;
        display: grid;
    }

    main.child > .table > table > thead > tr > th {
        grid-row: 1;
        color: teal;
    }

    main.child > .table > table > tbody {
        color: #32c3a2;
        grid-row: 5/20;
        grid-column: 1/6;
        display: grid;
    }

    main.child > .table > table > tbody > tr {
        display: grid;
    }

    main.child > .table > table > tbody > tr > th {
        color: #32c3a2;
        grid-row: 2;
        display: grid;
        font-size: 15px;
    }

    main.child > .content {
        grid-row: 30 / 55;
        grid-column: 1 / 6;
        background-color: lightgray;
        color: teal;
        display: grid;
    }

    main.child > .content > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }

    main.child > .more {
        grid-row: 55 /95;
        grid-column: 1 / 6;
        background-color: white;
        border-top: 1px dashed gray;
        display: grid;
    }

    main.child > .more > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }


</style>