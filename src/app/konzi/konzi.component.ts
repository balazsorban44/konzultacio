import { Component, OnInit } from '@angular/core';
import { Question } from "app/question/question";
import { KonziLines } from "app/konzi/konziLines";

@Component({
  selector: 'app-konzi',
  templateUrl: './konzi.component.html',
  styleUrls: ['./konzi.component.scss']
})
export class KonziComponent implements OnInit {
  public myText: string = "";
  public leaveCasing: boolean = false;
  public delToGray: boolean = false;
  public showLineNumbers: boolean;
  private originalLines: string[];
  private lines: string[] = [];

  public q1: Question;
  public q2: Question;
  public q3: Question;
  public q4: Question;
  public q5: Question;
  public q6: Question;
  
  constructor() {
    this.reset();
  }

  public csapjad() {
    if(this.myText === ""){
      this.reset();
      return;
    }

    let workArray: string[] = [];
    let fillArray: string[] = [];
    let lineLengths: number[] = [];
    let startOfLines: number[] = [];
    let startOfLimeSumHelp: number = 0;

    this.originalLines.forEach(line => {
      if(this.leaveCasing)
        workArray = workArray.concat(line.split(''));
      else
        workArray = workArray.concat(line.toLowerCase().split(''));

      fillArray = fillArray.concat(line.split(''));
      lineLengths.push(line.length);
      startOfLines.push(startOfLimeSumHelp);
      startOfLimeSumHelp += line.length;
    });
    let textArray: string[] = [];
    if(this.leaveCasing)
      textArray = this.myText.split('');
    else
      textArray = this.myText.toLowerCase().split('');

    let indexes: number[] = [];    
    let index: number = 0;
    for (var l = 0; l < textArray.length; l++) {   
      if(textArray[l] === " "){
        index++;
        indexes.push(-1);
        continue;
      }

      if(textArray[l] === "_"){
        let lineIndex: number = 0;
        let charIndex: number = 0;
        let tmpNum: any;

        l++;
        while(l < textArray.length && textArray[l] !== ";" && textArray[l] !== "_"){
          tmpNum = parseInt(textArray[l]);
          if(isNaN(tmpNum)){
            alert("Bocsi Uram, de hibás a bemeneted!");
            return;
          }
          lineIndex = lineIndex * 10 + tmpNum;
          l++;
        }
        if(lineIndex == 0){
          alert("Bocsi Uram, de hibás a bemeneted!");
            return;          
        }
        if(lineIndex > this.lines.length){
          alert("Hé Uram, nincs is ennyi sor!");
            return;          
        }

        if(textArray[l] == "_"){
          charIndex = 1;
        }
        else{
          l++;
          while(l < textArray.length && textArray[l] !== "_"){
            tmpNum = parseInt(textArray[l]);
            if(isNaN(tmpNum)){
              alert("Bocsi Uram, de hibás a bemeneted!");
              return;
            }
            charIndex = charIndex * 10 + tmpNum;
            l++;
          }
          if(charIndex > this.lines[lineIndex-1].length){
            alert("Hé Uram, nincs is ennyi betű ebben a sorban!");
              return;          
          }
        }

        if(index < startOfLines[lineIndex - 1] + charIndex - 1){
          index = startOfLines[lineIndex - 1] + charIndex - 1;
        }

        continue;
      }

      while (index < workArray.length && workArray[index] != textArray[l]) {
        index++;
      }
      if(index >= workArray.length){
        alert("Bocsi Uram, de ez így nincs benne :'(\nAzért megmutatom, amit lehet.");
        break;
      }
      indexes.push(index);
      let stepsBack: number = 1;
      while (stepsBack < indexes.length && textArray[l - stepsBack] == workArray[index - stepsBack]) {
        indexes[indexes.length - stepsBack - 1] = index - stepsBack;
        stepsBack++;
      }
      index++;
    }

    let indexSum: number = 0;
    let indexCounter = 0;
    for (var i = 0; i < lineLengths.length; i++) {
      indexSum += lineLengths[i];
      while (indexCounter < indexes.length && indexes[indexCounter] < indexSum) {
        if(indexes[indexCounter] != -1){
        fillArray[indexes[indexCounter]] = `</del>${fillArray[indexes[indexCounter]]}<del>`;
        }
        indexCounter++;
      }
    }

    this.lines = [];
    for (var i = 0; i < lineLengths.length; i++) {
      var element = lineLengths[i];
      this.lines.push('<del>' + fillArray.slice(startOfLines[i], startOfLines[i] + lineLengths[i]).join('') + '</del>');
    }

    this.sliceUp(this.lines);
  }


  ngOnInit(): void {
  }

  public reset(){
    //this.myText = "";
    this.originalLines = KonziLines.originalLines;
    this.lines = this.originalLines;
    this.sliceUp(this.lines);
  }

  private sliceUp(linesToSlice: string[]) {

    this.q1 = new Question(
      linesToSlice.slice(0, 3),
      linesToSlice.slice(3, 4),
      linesToSlice.slice(4, 7),
      linesToSlice.slice(7, 10),
    )
    this.q2 = new Question(
      linesToSlice.slice(10, 15),
      linesToSlice.slice(15, 16),
      linesToSlice.slice(16, 20),
      linesToSlice.slice(20, 23),
    )
    this.q3 = new Question(
      linesToSlice.slice(23, 27),
      linesToSlice.slice(27, 28),
      linesToSlice.slice(28, 32),
      linesToSlice.slice(32, 36),
    )
    this.q4 = new Question(
      linesToSlice.slice(36, 41),
      linesToSlice.slice(41, 42),
      linesToSlice.slice(42, 46),
      linesToSlice.slice(46, 48)
    )

    this.q5 = new Question(
      linesToSlice.slice(48, 53),
      linesToSlice.slice(53, 54),
      linesToSlice.slice(54, 56),
      linesToSlice.slice(56, 58)
    )
    this.q6 = new Question(
      linesToSlice.slice(58, 61),
      linesToSlice.slice(61, 62),
      linesToSlice.slice(62, 64),
      linesToSlice.slice(64, 65),
    )
  }

}
