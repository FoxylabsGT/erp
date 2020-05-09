import { CustomRenderComponent } from './button.component';
let id: number;
export let settings2 = {
  columns: {
    fechahora: {
      title: 'Fecha Hora',
      filter: true,
      width: 'auto'
    },
    estado: {
      title: 'Estado',
      filter: true,
      width: 'auto'
    },
    id_taxi_pedi: {
      title: 'id',
      type: 'custom',
      valuePrepareFunction: (value,row,cell) => {
        //console.log(cell.row.data.id_taxi_pedi)
         id = cell.row.data.id_taxi_pedi;


        return id;
       },
      renderComponent: CustomRenderComponent
  }
  },
  actions: {
    add: false,
    edit: false,
    delete: false
  },
  pager: {
    perPage: 15,
  }
};
