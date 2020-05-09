import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Howl, Howler} from 'howler';
import { PedidosTabsComponent } from './pedidostabs.component';



describe('PedidosTabsComponent', () => {
  let sound = new Howl({
    src: ['./notification_bell.mp3'],
    autoplay: true,
    onend: function() {
      console.log('El sonido de notificacion funciona correctamente');
    }
      });

  let component: PedidosTabsComponent;
  let fixture: ComponentFixture<PedidosTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
