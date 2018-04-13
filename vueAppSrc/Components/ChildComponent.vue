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
                <tbody>
                <tr v-for="example in hardcoded">
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
    .table,
    .content,
    .more,
    table,
    h1,
    table > thead,
    table > thead > tr,
    table > tbody,
    table > tbody > tr,
    table > tbody > tr > th {
        grid-column: 1 / 6;
    }

    .table,
    .more,
    .content,
    table,
    table > thead,
    table > thead > tr,
    table > tbody,
    table > tbody > tr {
        display: grid;
    }

    .table {
        grid-row: 1 / 30;
    }

    .table > h1 {
        grid-row: 1 / 2;
    }

    .table > table {
        grid-row: 2 / 20;
    }

    .table > table > thead {
        grid-row: 1 / 5;
    }

    .table > table > thead > tr {
        grid-row: 2;
    }

    .table > table > thead > tr > th {
        grid-row: 1;
        color: teal;
    }

    .table > table > tbody {
        color: #32c3a2;
        grid-row: 5/20;
    }

    .table > table > tbody > tr > th {
        color: #32c3a2;
        grid-row: 2;
        font-size: 15px;
    }

    .content {
        grid-row: 30 / 60;
        background-color: lightgray;
        color: teal;
    }

    .content > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }

    .more {
        grid-row: 60 / 90;
        background-color: white;
        border-top: 1px dashed gray;
    }

    .more > .text {
        grid-row: 2;
        grid-column: 2;
        color: teal;
    }
</style>