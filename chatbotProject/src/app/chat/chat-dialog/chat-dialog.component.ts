import { element } from 'protractor';
import { ChatService } from '../chat.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

export interface Message {
  remetente?: string;
  mensagem: string;
  data?: Date;
}

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  msg: string;
  resultados: Message[]

  constructor(private chatService: ChatService) {
    this.initBoot()
   }

   initBoot() {
    this.resultados = []
    this.chatService.talk('oi')
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })
  }

  sendMessage() {
    this.resultados.push({ remetente: 'user', mensagem: this.msg, data: new Date() })
    this.chatService.talk(this.removerAcentos(this.msg))
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })

    this.msg = '';
  }
  
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  private removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }


  ngOnInit(): void {
  }

}
