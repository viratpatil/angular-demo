import { MapsComponent } from './../maps/maps.component';
import { ReadMeComponent } from './../readme/readme.component';
import * as GoldenLayout from 'golden-layout';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
@Component({
    selector: 'app-play',
    templateUrl: './playground.component.html'
})
export class PlaygroundComponent implements AfterViewInit {
   @ViewChild('playground') _playground: ElementRef;
   private _layout: any; 
   

   private _config = {
    content: [{
        type: 'column',
        content:[{
            type: 'component',
            componentName: 'ReadMeComponent',
            title: 'Read Me'
        },
        {
            type: 'component',
            componentName: 'MapsComponent',
            title: 'Maps'
        }]
    }]
    };

    constructor(private el: ElementRef, private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {

    }
    ngAfterViewInit() {
        this._layout = new GoldenLayout(this._config, this._playground.nativeElement);
        const _self = this;
        this._layout.registerComponent(ReadMeComponent.componentName, function (container: any, componentState: any) {
            let factory = _self.componentFactoryResolver.resolveComponentFactory(ReadMeComponent);
            let compRef = _self.viewContainer.createComponent(factory);
            // compRef.instance.setEventHub(this._layout.eventHub);
            // compRef.instance.message = componentState.message;
            container.getElement().append(compRef.location.nativeElement); 
            container["compRef"] = compRef;
            compRef.changeDetectorRef.detectChanges();
        });
        
        this._layout.registerComponent(MapsComponent.componentName, function (container: any, componentState: any) {
            let factory = _self.componentFactoryResolver.resolveComponentFactory(MapsComponent);
            let compRef = _self.viewContainer.createComponent(factory);
            // compRef.instance.setEventHub(this._layout.eventHub);
            // compRef.instance.message = componentState.message;
            container.getElement().append(compRef.location.nativeElement); 
            container["compRef"] = compRef;
            compRef.changeDetectorRef.detectChanges();
        });

        this._layout.init();
   }


}