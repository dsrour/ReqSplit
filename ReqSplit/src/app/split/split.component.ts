import { Component, OnInit } from '@angular/core';
import { Contributor } from '../contributor';

@Component({
    selector: 'app-split',
    templateUrl: './split.component.html',
    styleUrls: ['./split.component.css']
})

export class SplitComponent implements OnInit {
    private _total = 0;
    private _numContributors = 0;
    private _contributors: Contributor[];
    
    constructor() { }

    ngOnInit() {        
    }

}
