import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Howl, Howler} from 'howler';

import { PedidosHistoricoComponent } from './pedidos.component';

describe('PedidosComponent', () => {
  let sound = new Howl({
    src: ['./notification_bell.mp3'],
    autoplay: true,
    onend: function() {
      console.log('El sonido de notificacion funciona correctamente');
    }
      });

  let component: PedidosHistoricoComponent;
  let fixture: ComponentFixture<PedidosHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
