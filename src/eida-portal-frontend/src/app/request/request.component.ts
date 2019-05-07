import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../console.service';
import { RequestService } from '../request.service';
import { EventsService } from '../events.service';
import { StationsService } from '../stations.service';
import { TextService } from '../text.service';
import { Enums } from '../modules/enums';

declare var $: any;
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
})
export class RequestComponent implements OnInit {

  constructor(
    public requestService: RequestService,
    public textService: TextService,
    private _eventsService: EventsService,
    private _stationsService: StationsService,
    private _consoleService: ConsoleService) { }

  ngOnInit() { }

  timeWindowSelectionModeChanges(t: Enums.RequestTimeWindowSelectionModes) {
    this.requestService.requestModel.timeWindowSelectionMode = t;
  }

  review() {
    this._consoleService.add('Request/review clicked');
  }

  download() {
    this._consoleService.add('Request/submit clicked >>> ' + this.requestService.requestModel.toString());
  }

  toggleModal() {
    $('#stageModal').toggleClass('is-active');
  }

  handleModeChange(btn: string, target: string): void {
    $('#absoluteModeContent, #relativeModeContent').hide();
    $('#modesTabs').find('li').removeClass('is-active');
    $(`#${btn}`).addClass('is-active');
    $(`#${target}`).show("fast");
  }
}
