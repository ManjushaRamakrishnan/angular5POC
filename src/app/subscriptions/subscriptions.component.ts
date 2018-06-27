import {
  Component,
  OnInit,
  Input,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})

export class SubscriptionsComponent implements OnInit, OnChanges {
  @Input() summary;
  MAX_TAB = 9;
  // Move this to global variables
  colorHexGuide = ['#008fb6', '#E4BC40', '#662d91', '#7aaa39', '#ac0067', '#2926ab', '#cd5e40', '#2b464c', '#bbb62a', '#317d59'];
  //  Get selected account
  // selectedAccount = this.summary;
  subsciptions;
  linesInGroup;
  badgeList;

  constructor() {
  }

  ngOnInit() {
    this.subsciptions = [];
    this.badgeList = {
      subscriberList: []
    };
  }
 
  ngOnChanges() {
    if (this.summary) {
      this.subsciptions = this.summary ? this.summary['subList'] : [];
      this.badgeList = {
       planName: this.summary['shareEverything']['planName'],
        isShareEverythingEligible: this.summary['shareEverything']['isDataManagerEligible'],
        selectedCTN: '',
        subscriberList: []
      };
      this.getSubscribersList(this.subsciptions);
      this.badgeList.selectedCTN = this.badgeList.subscriberList[0].ctn;
    }
  }
 
  /* Function to get required attributes from backend to subscriber list
  * @param subList : backend response value for subscriber list
  */
  getSubscribersList(subList) {
    for (let iSub = 0; iSub < subList.length; iSub++) {
      const sub = subList[iSub];
      if (sub.shareEverything && sub.subType === 'CTN') {
        this.badgeList.subscriberList.push({
          displayName: sub.firstname,
          ctn: sub.subNumber,
          colorCode: this.colorHexGuide[iSub],
          subStatus: sub.subStatus,
          isLink: false,
          deviceBalance: sub.deviceBalance,
          perMonthCharge: sub.perMonthCharge
        });
      }
    }
  }
}
