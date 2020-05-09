import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Howl, Howler} from 'howler';

import { Pedidos2Component } from './pedidos.component';

describe('PedidosComponent', () => {
  let sound = new Howl({
    src: ['./notification_bell.mp3'],
    autoplay: true,
    onend: function() {
      console.log('El sonido de notificacion funciona correctamente');
    }
      });

  let component: Pedidos2Component;
  let fixture: ComponentFixture<Pedidos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pedidos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pedidos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
