import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Howl, Howler} from 'howler';

import { Pedidos4Component } from './pedidos.component';

describe('PedidosComponent', () => {
  let sound = new Howl({
    src: ['./notification_bell.mp3'],
    autoplay: true,
    onend: function() {
      console.log('El sonido de notificacion funciona correctamente');
    }
      });

  let component: Pedidos4Component;
  let fixture: ComponentFixture<Pedidos4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pedidos4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pedidos4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
