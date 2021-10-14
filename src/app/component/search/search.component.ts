import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { TataSky } from 'src/app/model/TataSky';
import { ConfigService } from 'src/app/services/config.service';

@Component({
selector:'app-search',
templateUrl: './search.component.html',
styleUrls:['./search.component.css']
})
export class SearchComponent implements OnInit {
  formGroup: FormGroup=this.fb.group({
    searchData: [{ value: '', disabled:false }],
  });
  
  channelBroadcasters: any[] = [];
  p: number = 1;
  count:number=0;
  isFound:boolean=false;
  constructor(private _configService: ConfigService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  getSearchedData(){
    this._configService.getSearchedData(this.formGroup?.controls["searchData"].value).subscribe(response=>{
      if(response && response.length >1)
        this.isFound=true;
        else{
          this.count++;
        }
      this.channelBroadcasters=response;
    });
  }

}
