import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Howl, Howler} from 'howler';

import { Pedidos3Component } from './pedidos.component';

describe('PedidosComponent', () => {
  let sound = new Howl({
    src: ['./notification_bell.mp3'],
    autoplay: true,
    onend: function() {
      console.log('El sonido de notificacion funciona correctamente');
    }
      });

  let component: Pedidos3Component;
  let fixture: ComponentFixture<Pedidos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pedidos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pedidos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
