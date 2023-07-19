import { Proyecto } from "./proyecto";

export const PROYECTOS: Proyecto[] = [
  {
    id: 'a',
    nombre: 'App Canguro',
    fechaCreacion: new Date('2018-10-23'),
    descripcion: 'Aplicacion para el hospital militar',
    url: 'https://getbootstrap.com/docs/5.0/examples/album/',
    imagenes: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hospital_Militar%2C_Bogot%C3%A1%2C_Colombia_-_panoramio_%281%29.jpg/1920px-Hospital_Militar%2C_Bogot%C3%A1%2C_Colombia_-_panoramio_%281%29.jpg'
    ]
  },
  {
    id: 'b',
    nombre: 'App trasplantes',
    fechaCreacion: new Date('2017-11-23'),
    descripcion: 'Aplicacion para el hospital militar',
  },
  {
    id: 'c',
    nombre: 'CPGOPS integrations',
    fechaCreacion: new Date('2020-10-23'),
    descripcion: 'Backend para integraciones de ordenes CPG en Rappi',
    imagenes: [
      'https://www.america-retail.com/static//2021/09/rappi-e1676425601353-696x464.jpg',
    ]
  },
  {
    id: 'd',
    nombre: 'App Centro Español',
    fechaCreacion: new Date('2017-01-23'),
    descripcion: 'Aplicacion para el hospital Centro de Español de la Universidad de los Andes',
    imagenes: [
      'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif'
    ]
  }
]
