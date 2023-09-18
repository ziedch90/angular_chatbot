import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gbt',
  templateUrl: './gbt.component.html',
  styleUrls: ['./gbt.component.css']
})
export class GbtComponent implements OnInit {
queryFormGroup! : FormGroup;
messages=[
  {role:"system", content:"You are a helpful assistant."}
];
result : any;

constructor(private fb : FormBuilder , private httpClient : HttpClient){

}
ngOnInit() {
this.queryFormGroup=this.fb.group({
  query : ['', [Validators.required, Validators.maxLength(3)]]
})
}
handleAskGbt(){
  let url ="https://api.openai.com/v1/chat/completions"
  let httpHeaders = new HttpHeaders().set("Authorization", "Bearer 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")
   this.messages.push({
    role: "user", content: this.queryFormGroup.value.query
  })
  let payload = {
    model : "gpt-3.5-turbo",
    messages : this.messages
  }
this.httpClient.post(url, payload,{headers:httpHeaders})
.subscribe({
  next : (resp)=>{
    this.result=resp;
    this.result.choices.forEach((choice : any) => {
      this.messages.push({
        role: "assistant", content : choice.message.content
    })

      })



  },
  error : (err)=>{

  }

})
}
}
