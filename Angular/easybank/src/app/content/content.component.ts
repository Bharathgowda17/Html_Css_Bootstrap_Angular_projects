import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
 block = [{
  img:"assets/icon-online-banking.svg",
  title:"Online banking",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
{
  img:"assets/icon-simple-budgeting.svg",
  title:"Online banking",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
{
  img:"assets/icon-fast-onboarding.svg",
  title:"Online banking",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
{
  img:"assets/icon-open-API.svg",
  title:"Online banking",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
]
articles=[{
   img:"assets/image-currency.jpg",
  title:"Receive money in any currency with no fees",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
{
  img:"assets/image-restaurant.jpg",
  title:"Treat yourself without worrying about money",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
{
  img:"assets/image-plane.jpg",
  title:"Take your Easybank card wherever you go",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
{
  img:"assets/image-confetti.jpg",
  title:"Our invite-only Beta accounts are now live!",
  description: "Lorem Ipsum is simply dummy text of the printing and industry."
},
]
}

