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
    private _contributors = [];
    private _curSelectedContributor = 0;

    constructor() { }

    ngOnInit() {

    }

    generateContributorsList(newValue: number) {
        let cur_length = this._contributors.length;
        if (cur_length < newValue) {
            for (let i = this._contributors.length; i < newValue; i++) {
                var a: Contributor = { id: i, name: 'Mr. ' + i, contributionPercentage: 0.0 };
                this._contributors.push(a);
            }
        }
        else {
            for (let i = newValue; i < cur_length; i++) {
                this._contributors.pop();
            }
        }
    }
}
