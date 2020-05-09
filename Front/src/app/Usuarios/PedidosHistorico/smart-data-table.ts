export let settings2 = {
  columns: {
    id: {
      title: 'ID',
      filter: true,
      editable: false,
      width: '8%'
    },
    name: {
      title: 'Full Name',
      filter: true
    },
    fechahora: {
      title: 'Fecha Hora',
      filter: true,
      width: '25%'
    },
    estado: {
      title: 'Estado',
      filter: true,
      width: '10%'
    }
  },
  actions: {
    delete: false,
    add: false,
    edit: false
  },
  pager: {
    perPage: 15,
  }
};
