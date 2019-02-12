import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'feedbacks',
    templateUrl: './feedbacks.component.html'
})
export class FeedbacksComponent {
    public feedbacks: Feedbacks[];
    public p: number = 1;
    public key: string = 'name'; //set default
    public reverse: boolean = false;
    

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
       
    }

    getFeedbacks() {
        // To get real-time data call your APRI
        //this.http.get('pass your api end point url here').subscribe(result => {
        //    this.feedbacks = result.json() as Feedbacks[];
        //}, error => console.error(error));

        // Dummy data for demo 
        this.feedbacks = [
            {
                Id: "1" ,
                Comment: "Document sets in modern document libraries",
                Email: "joseph@xyz.com",
                Created: "2019-02-01T01:44:07.103",
                Modified: "2019-02-01T01:45:07.103",
                SourcePage: "https://xyz.com/page1.aspx",
                TenantID: "1daec911-2bed-4e07-bdf7-0d6d3bd88e52"
            },
            {
                Id: "2",
                Comment: "Set Communication Site as Root site collection",
                Email: "bose@xyz.com",
                Created: "2019-02-02T01:44:07.103",
                Modified: "2019-02-02T01:45:07.103",
                SourcePage: "https://xyz.com/page2.aspx",
                TenantID: "f8419790-d0dd-4b99-8740-c5e32237d782"
            },
            {
                Id: "3",
                Comment: "Freeze Column Headers",
                Email: "anbu@xyz.com",
                Created: "2019-02-03T01:44:07.103",
                Modified: "2019-02-03T01:45:07.103",
                SourcePage: "https://xyz.com/page3.aspx",
                TenantID: "92eccc17-e2b3-4d40-810d-d4dda3e4b872"
            },
            {
                Id: "4",
                Comment: "Open Adobe PDF in client application",
                Email: "mary@xyz.com",
                Created: "2019-02-04T01:44:07.103",
                Modified: "2019-02-04T01:45:07.103",
                SourcePage: "https://xyz.com/page4.aspx",
                TenantID: "907ce62c-2bc3-43ca-9a3a-72d29c675329"
            },
            {
                Id: "5",
                Comment: "Make rename in Teams reflect name changes in Sharepoint?",
                Email: "velliah@xyz.com",
                Created: "2019-02-05T01:44:07.103",
                Modified: "2019-02-05T01:45:07.103",
                SourcePage: "https://xyz.com/page5.aspx",
                TenantID: "18942196-0c47-4c41-94f4-57430fff2423"
            },
            {
                Id: "6",
                Comment: "Enable renaming the site collection URLs",
                Email: "lois@xyz.com",
                Created: "2019-02-06T01:44:07.103",
                Modified: "2019-02-06T01:45:07.103",
                SourcePage: "https://xyz.com/page6.aspx",
                TenantID: "35a4c2f2-7379-447f-83b0-28dc34141e03"
            }
        ];
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    ngOnInit() {
        this.getFeedbacks();
    }
}

interface Feedbacks {
    Id: string;
    Comment : string;
    Email: string;
    Created: string;
    Modified: string;
    SourcePage: string;
    TenantID: string;
}
